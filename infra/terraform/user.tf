data "aws_iam_policy" "admin" {
  arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}

variable "user_names" {
  description = "Create IAM users with these names"
  type        = list(string)
  default     = ["amikai", "sweetasfanny", "yiz", "ztex", "service_account"]
}

resource "aws_iam_group" "admin" {
  name = "admin"
}

resource "aws_iam_group_policy_attachment" "admin" {
  group      = aws_iam_group.admin.name
  policy_arn = data.aws_iam_policy.admin.arn
}

resource "aws_iam_user" "users" {
  count = length(var.user_names)
  name  = var.user_names[count.index]
}

resource "aws_iam_group_membership" "admin" {
  name = "admin"

  users = aws_iam_user.users[*].name
  group = aws_iam_group.admin.name
}

