package presigned_url

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/google/uuid"
)

var _ lambda.Handler = &Impl{}

type Config struct {
	AwsConfig aws.Config
	Bucket    string
}

type Impl struct {
	s3Client        *s3.Client
	s3PresignClient *s3.PresignClient
	Config
}

func New(config Config) (*Impl, error) {
	s3Client := s3.NewFromConfig(config.AwsConfig)
	s3PresignClient := s3.NewPresignClient(s3Client)

	return &Impl{
		s3Client:        s3Client,
		s3PresignClient: s3PresignClient,
		Config:          config,
	}, nil
}

func (i *Impl) Invoke(ctx context.Context, payload []byte) ([]byte, error) {
	var req events.APIGatewayProxyRequest

	err := json.Unmarshal(payload, &req)
	if err != nil {
		return nil, fmt.Errorf("payload unmarshal failed: %v", err)
	}

	presignUrl, err := i.getPresignUrl(ctx)
	if err != nil {
		return nil, fmt.Errorf("failed to get presign url: %v", err)
	}

	body := presignUrl
	if err != nil {
		return nil, fmt.Errorf("failed to marshal: %v", err)
	}

	if err != nil {
		return nil, fmt.Errorf("failed to marshal: %v", err)
	}

	res := events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
		Headers:    map[string]string{"Content-Type": "text/json", "Content-Encoding": "UTF-8"},
		Body:       string(body),
	}

	resByte, err := json.Marshal(res)
	if err != nil {
		return nil, fmt.Errorf("failed to marshal: %v", err)
	}
	return resByte, nil
}

func newUUID() string {
	id := uuid.New()
	return id.String()
}

func (i *Impl) getPresignUrl(ctx context.Context) (string, error) {
	key := newUUID()
	resp, err := i.s3PresignClient.PresignPutObject(ctx, &s3.PutObjectInput{
		Bucket: &i.Bucket,
		Key:    &key,
	})
	if err != nil {
		return "", fmt.Errorf("faild to get presign object: %v", err)
	}
	return resp.URL, nil
}
