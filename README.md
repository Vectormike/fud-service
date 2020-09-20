# RESTful API Node Server For Fud

### API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/register` - register\
`POST /v1/auth/login` - login\
`POST /v1/auth/refresh-tokens` - refresh auth tokens\
`POST /v1/auth/forgot-password` - send reset password email\
`POST /v1/auth/reset-password` - reset password

**User routes**:\
`POST /v1/users` - create a user\
`GET /v1/users` - get all users\
`GET /v1/users/:userId` - get user\
`PATCH /v1/users/:userId` - update user\
`DELETE /v1/users/:userId` - delete user

**Service routes**:\
`POST /v1/services` - create a service\
`GET /v1/services` - get all services\
`GET /v1/services/:serviceId` - get service\
`PUT /v1/services/:serviceId` - update service\
`DELETE /v1/services/:serviceId` - delete service\

## License

[MIT](LICENSE)
