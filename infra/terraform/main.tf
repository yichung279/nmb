provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket         = "masuni-terraform-state"
    region         = "us-east-1"
    dynamodb_table = "masuni_terraform_locks"
    key            = "global/s3/terraform.tfstate"
    encrypt        = true
  }
}
