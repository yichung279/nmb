package handler

import (
	"context"
	"log"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/config"

	presignUrlHandler "github.com/yichung279/masuni/backend/presign_url"
)

func main() {
	ctx := context.Background()
	cfg, err := config.LoadDefaultConfig(ctx)
	if err != nil {
		// TODO: use the proper log message
		log.Fatal()
	}

	handler, err := presignUrlHandler.New(
		presignUrlHandler.Config{
			AwsConfig: cfg,
			Bucket:    "beauty",
		},
	)
	if err != nil {
		// TODO: use the proper log message
		log.Fatal()
	}

	lambda.StartHandlerWithContext(ctx, handler)
}
