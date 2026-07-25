output "signup_endpoint" {
  description = "POST this URL with { \"email\": \"...\" } to add a signup"
  value       = "${aws_apigatewayv2_api.http_api.api_endpoint}/signup"
}
