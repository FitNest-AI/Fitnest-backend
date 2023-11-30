# Authentication

This Api will be used to authenticate new user

## 1.Auth Register

**HTTP Request**
```
  POST /api/v1/auth/register
```

**Request Body**

| Parameter         | Status               | Description                |
| :--------         | :-------             | :------------------------- |
| `email`           | `required`           | Email address for creating a new account. |
| `password`        | `required` `min: 8`  | Password (minimum 8 characters). |
| `confirmPassword` | `required`           | Confirmation of the password. Must match the provided password. |

**Response Body**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    | `True` if registration is successful, `False` if registration fails.  |
| `message`    | Explanation of the outcome (success or failure details).  |
| `data`       | Container for registration information.  |
| `user`       | Registered user details |
| `email`      | Email address of the registered user.  |
| `username`   | Default username assigned by the server.  |
| `image`      | Default profile image or avatar assigned by the server.  |
| `verify`     | Verification status of the user's account (`True` or `False`). |
| `roleId`     | Identifier specifying the user's role or permissions.  |
| `token`      | Authentication token for verifying the user's account.  |

**Example**
```
curl --location -g 'http://{{base_url}}/api/v1/auth/register' \
--data-urlencode 'email=yourEmail@gmail.com' \
--data-urlencode 'password=yourPassword' \
--data-urlencode 'confirmPassword=password'
```

```JSON
    {
        "success": true,
        "message": "Registration successful",
        "data": {
            "user": {
            "email": "yourEmail@gmail.com",
            "username": "userEYIKFgmlh0PpULQEzEg7KoC5PwDItZyb",
            "verify": false,
            "roleId": "6560765f1844dab5919f6ea2",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjcyMzg2MzhiZGU4NzFmYzBkOWVjYSIsImlhdCI6MTcwMTI1ODExOCwiZXhwIjoxNzAxMjU4NDE4fQ.Fx3qhNABJAxYDl2W12JnVw2tiTw6Tok4E5cnAsfyACE"
            }
        }
    }
```

## 2.Auth Verify

**HTTP Request**
```
  GET /api/v1/auth/verify?token={{token}}
```

**Query**

| Parameter         | Description                  |
| :--------         | :-------------------------   |
| `token`           | Token for verifying account. | 

**Response Body**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    | `True` if verification is successful, `False` if verification fails.  |
| `message`    | Explanation of the outcome (success or failure details).  |
| `data`       | Container for verification information.  |
| `user`       | Verified user details.  |
| `email`      | Email address of the registered user.  |
| `verify`     | Verification status of the user's account (`True` or `False`).  |

**Example**
```
    curl --location -g --request POST 'http://{{base_url}}/api/v1/auth/verify?token={{token}}'
```

```JSON
    {
        "success": true,
        "message": "Verification successful",
        "user": {
            "email": "yourEmail@gmail.com",
            "verify": true
        }
    }
```

## 3.Auth Resend Token Verify

**HTTP Request**
```
  GET /api/v1/auth/resend-verify
```

**Request Body**

| Parameter         | Status     | Description                |
| :--------         | :-------   | :------------------------- |
| `email`           | `required` | Email address of the registered user. | 

**Response Body**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    | `True` if resend token is successful, `False` if resend token fails.  |
| `message`    | Explanation of the outcome (success or failure details).  |
| `data`       | Container for verification information.  |
| `token`      | Resend authentication token for verifying the user's account.  |

**Example**
```
    curl --location -g --request GET 'http://localhost:3000/api/v1/auth/resend-verify'
```

```JSON
    {
        "success": true,
        "message": "Verification successful",
        "data": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjU3Mzk3NWJhZjE5MzYyYzUyMGE1NCIsImlhdCI6MTcwMTIzNDM2NywiZXhwIjoxNzAxMjM0NDI3fQ.p38reQ5zzhLAYSEDKRkkqxfhoqpzEdkO5xC24289Ifc"
        }
    }
```

## 4. Auth Forget Password

**HTTP Request**
```
    GET /api/v1/auth/forget-password
```

**Request Body**

| Parameter         | Status     | Description                |
| :--------         | :-------   | :------------------------- |
| `email`           | `required` | Email address of the registered user. | 

**Response Body**

| Parameter    | Description                |
| :---------   | :------------------------- |
| `success`    | `True` if the token is successfully sent, `False` if sending fails.  |
| `message`    | Explanation of the outcome (success or failure details).  |
| `data`       | Container for forget password information.  |
| `token`      | Token access for resetting the user's account password.  |

**Example**

```
    curl --location -g 'http://{{base_url}}/api/v1/auth/forget-password' \
    --data-urlencode 'email=yourEmail@gmail.com'
```

```JSON
    {
        "success": true,
        "message": "Token successfully sent",
        "data": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWMwNWUwZDA1YTkyNTk3NmFmYzA3MSIsImlhdCI6MTcwMTIzNDM2NywiZXhwIjoxNzAxMjM0NDI3fQ.p38reQ5zzhLAYSEDKRkkqxfhoqpzEdkO5xC24289Ifc"
        }
    }
```

## 5.Auth Reset Password

**HTTP Request**
```
    GET /api/v1/auth/reset-password?token={{token}}
```

**Query**

| Parameter | Description                |
| :-------- | :------------------------- |
| `token`   | Token for resetting the account password. | 


**Response Body**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `success`         | `True` if resetting the password is successful, `False` if resetting fails.  |
| `message`         | Explanation of the outcome (success or failure details).  |

**Example**

```
curl --location -g 'http://{{base_url}}/api/v1/auth/reset-password?token={{token}}' \
```

```JSON
    {
        "success": true,
        "message": "Reset Password Successful"
    }
```

## 5.Auth Login

**HTTP Request**
```
  POST /api/v1/auth/login
```

**Request Body**

| Parameter         | Status                | Description                |
| :--------         | :-------              | :------------------------- |
| `email`           | `required`            | Email address of the registered user. | 
| `password`        | `required` `min: 8`   | Password (minimum 8 characters). | 

**Response Body**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `success`         | `True` if authentication is successful, `False` if authentication fails.  |
| `message`         | Explanation of the outcome (success or failure details).  |
| `data`            | Container for login information.  |
| `user`            | Authenticated user details.  |
| `email`           | Email address of the registered user.  |
| `username`        | Username by the user.  |
| `image`           | URL of the user's profile image or avatar.  |
| `verify`          | Verification status of the user's account (True or False).  |
| `roleId`          | Identifier specifying the user's role or permissions.  |

**Example**

```
curl --location -g 'http://{{base_url}}/api/v1/auth/login' \
--data-urlencode 'email=yourEmail@gmail.com' \
--data-urlencode 'password=yourPassword'
```

```JSON
    {
     "success": true,
     "message": "Authentication successful. Welcome!",
     "data": {
        "user": {
            "email": "yourEmail",
            "username": "userEYIKFgmlh0PpULQEzEg7KoC5PwDItZyb",
            "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/avatar/default_avatar.png",
            "verify": true,
            "roleId": "65526a6fa4cc0197cdb53483"
        }
     }
    }
```

## 6.Auth Logout

**HTTP Request**
```
  GET /api/v1/auth/logout
```

**Response Body**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `success`         | `True` if logout is successful, `False` if logout fails.  |
| `message`         | Explanation of the outcome (success or failure details).  |

**Example**

```
curl --location -g 'http://{{base_url}}/api/v1/auth/logout'
```

```JSON
    {
    "success": true,
    "message": "You have successfully logged out"
    }
```