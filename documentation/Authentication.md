# Authentication

This Api will be used to authenticate new user

## 1.authRegister

**HTTP Request**
```
  POST /api/v1/auth/register
```

**Request Body**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `email`           |  email that haven't registered for creating new account  |
| `password`        |  password must contain 8 character|
| `confirmPassword` |  must be the same as password|

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    |   |
| `message`    |   |
| `user`       |   |
| `email`      |   |
| `password`   |   |
| `username`   |   |
| `image`      |   |
| `verify`     |   |
| `roleId`     |   |
| `_id`        |   |
| `token`      |   |
| `createdAt`  |   |
| `UpdatedAt`  |   |
| `__v`        |   |

**Example**
```
curl --location -g 'http://{{base_url}}/api/v1/auth/register' \
--data-urlencode 'email=rahman.adityaaa31@gmail.com' \
--data-urlencode 'password=password' \
--data-urlencode 'confirmPassword=password'
```

```JSON
     {
      "success": true,
      "message": "Registration successful",
      "user": {
          "email": "adityarahman59@gmail.com",
          "password": "$2b$10$aEm3az1niD5M/QFhkzrlVelvmUV87onQ18fCv2r4IH72O9hLJnzlW",
          "username": "userDVIkhmVkFUSndlT2u4fx8rCX9nv9gjBk",
          "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/avatar/default_avatar.png",
          "verify": false,
          "roleId": "65526a6fa4cc0197cdb53483",
          "_id": "656573975baf19362c520a54",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjU3Mzk3NWJhZjE5MzYyYzUyMGE1NCIsImlhdCI6MTcwMTE0NzU0MywiZXhwIjoxNzAxMTQ3ODQzfQ.2mUc0Nd-clhZ5BUyB4CkUF6TN7j13ZWhYrguBaXBPKc",
          "createdAt": "2023-11-28T04:59:03.382Z",
          "updatedAt": "2023-11-28T04:59:03.382Z",
          "__v": 0
       } 
     }
```

## 2.authVerifyWithToken

**HTTP Request**
```
  GET /api/v1/auth/verify?token={{token}}
```

**Parameter**

| Parameter | Status   | Description                |
| :-------- | :------- | :------------------------- |
| `token`   | ``       |                            |

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    |   |
| `message`    |   |
| `user`       |   |
| `_id`        |   |
| `email`      |   |
| `password`   |   |
| `username`   |   |
| `image`      |   |
| `verify`     |   |
| `roleId`     |   |
| `createdAt`  |   |
| `UpdatedAt`  |   |
| `__v`        |   |

**Example**
```
    curl --location -g --request POST 'http://{{base_url}}/api/v1/auth/verify?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjU3Mzk3NWJhZjE5MzYyYzUyMGE1NCIsImlhdCI6MTcwMTE0NzU0MywiZXhwIjoxNzAxMTQ3ODQzfQ.2mUc0Nd-clhZ5BUyB4CkUF6TN7j13ZWhYrguBaXBPKc'
```

```JSON
    {
     "success": true,
     "message": "Verification successful",
     "user": {
        "_id": "655c05e0d05a925976afc071",
        "email": "rahman.adityaaa31@gmail.com",
        "password": "$2b$10$jKq0lVeKC2D3mCRkRLYWguDKUZ8OAOTPlz2YRjNEAhuO06I.CLhBa",
        "username": "userEYIKFgmlh0PpULQEzEg7KoC5PwDItZyb",
        "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/avatar/default_avatar.png",
        "verify": true,
        "roleId": "65526a6fa4cc0197cdb53483",
        "createdAt": "2023-11-21T01:20:32.267Z",
        "updatedAt": "2023-11-29T04:55:59.092Z",
        "__v": 0
     }
    }
```

## 3.authForgetPassword

**HTTP Request**
```
    GET /api/v1/auth/forget-password
```
**Request Body**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `email`           |    |

**Response**

| Parameter  | Description                |
| :--------- | :------------------------- |
| `success`  |   |
| `message`  |   |
| `token`    |   |

**Example**

```
    curl --location -g 'http://{{base_url}}/api/v1/auth/forget-password' \
    --data-urlencode 'email=rahman.adityaaa31@gmail.com'
```

```JSON
    {
    "success": true,
    "message": "Token successfully sent",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWMwNWUwZDA1YTkyNTk3NmFmYzA3MSIsImlhdCI6MTcwMTIzNDM2NywiZXhwIjoxNzAxMjM0NDI3fQ.p38reQ5zzhLAYSEDKRkkqxfhoqpzEdkO5xC24289Ifc"
    }
```

## 4.authResetPasswordWithToken

**HTTP Request**
```
    GET /api/v1/auth/reset-password?token={{token}}
```

**Parameter**

| Parameter |          | Description                |
| :-------- | :------- | :------------------------- |
| `token`   | ``       |  |


**Response**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `success`         |   |
| `message`         |   |

**Example**

```
curl --location -g 'http://{{base_url}}/api/v1/auth/reset-password?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWMwNWUwZDA1YTkyNTk3NmFmYzA3MSIsImlhdCI6MTcwMTIzNDM2NywiZXhwIjoxNzAxMjM0NDI3fQ.p38reQ5zzhLAYSEDKRkkqxfhoqpzEdkO5xC24289Ifc' \
```

```JSON
    {
    "success": true,
    "message": "Reset Password Successful"
    }
```

## 5.authLogin

**HTTP Request**
```
  POST /api/v1/auth/login
```

**Request Body**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `email`           |  Using email that has been registered |
| `password`        |  password must contain 8 character|

**Response**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `success`         |   |
| `message`         |   |
| `data`            |   |
| `user`            |   |
| `email`           |   |
| `username`        |   |
| `image`           |   |
| `verify`          |   |
| `roleId`          |   |

**Example**

```
curl --location -g 'http://{{base_url}}/api/v1/auth/login' \
--data-urlencode 'email=rahman.adityaaa31@gmail.com' \
--data-urlencode 'password=VWGqDNvoNHfuEXZUsGHLdWqOuKmTrIMu'
```

```JSON
    {
     "success": true,
     "message": "Authentication successful. Welcome!",
     "data": {
        "user": {
            "email": "rahman.adityaaa31@gmail.com",
            "username": "userEYIKFgmlh0PpULQEzEg7KoC5PwDItZyb",
            "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/avatar/default_avatar.png",
            "verify": true,
            "roleId": "65526a6fa4cc0197cdb53483"
        }
     }
    }
```

## 6.authLogout

**HTTP Request**
```
  GET /api/v1/auth/logout
```

**Response**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `success`         |   |
| `message`         |   |

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

## 7.authResendTokenVerify

**HTTP Request**
```
    GET /api/v1/auth/resend-verify
```

**Request Body**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `email`           |    |

**Response**

| Parameter  | Description                |
| :--------- | :------------------------- |
| `success`  |   |
| `message`  |   |
| `token`    |   |

**Example**

```
curl --location 'http://localhost:3000/api/v1/auth/resend-verify' \
--data-urlencode 'email=rahman.adityaaa31@gmail.com'
```

```JSON
    {
    "success": true,
    "message": "Token successfully sent",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWMwNWUwZDA1YTkyNTk3NmFmYzA3MSIsImlhdCI6MTcwMTIzMzczMCwiZXhwIjoxNzAxMjM0MDMwfQ.QsPj9Cxn7yLwOPW6i0KoM212znubNCGhr9Wu9QyRR7I"
    }
```