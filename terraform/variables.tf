variable "aws_region" {
  description = "Region to deploy into"
  type        = string
  default     = "af-south-1"
}

variable "allowed_origin" {
  description = "Origin your static site is served from, e.g. https://reserveafrica.com. Use * only for testing."
  type        = string
  default     = "*"
}

variable "project_name" {
  description = "Prefix used for resource names"
  type        = string
  default     = "reserve-africa-signup"
}

variable "notification_email" {
  description = "Email address to notify whenever someone signs up"
  type        = string
}
