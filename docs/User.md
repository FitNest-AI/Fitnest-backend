# User

This Api is for User

## 1.Fetch All User Data

**HTTP Request**

```
GET /api/v1/user/all
```

**Response Body**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    | `True` if data fetch is successful, `False` otherwise.  |
| `message`    | Explanation of the outcome (success or failure details).  |
| `data`       | Container for user data.  |
| `user`       | Array containing user information.  |
| `_id`        | User ID.  |
| `email`      | User's email address.  |
| `username`   | User's username.  |
| `image`      | URL of the user's profile image.  |
| `verify`     | Verification status of the user's account (`True` or `False`).  |
| `roleId`     | Identifier specifying the user's role or permissions.  |
| `count`      | Total count of users fetched.  |

**Example**

```
curl --location '{{base_url}}/api/v1/user/all'
```

```JSON
    {
        "success": true,
        "message": "User all data fetch successful",
        "data": {
            "user": [
                {
                    "_id": "6567833b40e7fd3fc45734bd",
                    "email": "yourEmail@gmail.com",
                    "username": "user11vRzaEFhjapd82MKIcC70Ao256kNOMb",
                    "image": "https://storage.googleapis.com/fitnest-project-bucket/avatar/default.png",
                    "verify": true,
                    "roleId": "6560765f1844dab5919f6ea2"
                }
            ],
            "count": 1
        }
    }
```

## 2.Fetch User Data

***Note***
```
AllUserAuthenticate
```

**HTTP Request**

```
    GET /api/v1/user
```

**HTTP Headers**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `Authorization`      | User authentication token for API authorization.  |

**Response Body**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    | `True` if data fetch is successful, `False` otherwise.  |
| `message`    | Explanation of the outcome (success or failure details). |
| `data`       | Container for user data.  |
| `user`       | Object containing user information.  |
| `_id`        | User ID.  |
| `email`      | User's email address.  |
| `username`   | User's username.  |
| `image`      | URL of the user's profile image.  |
| `verify`     | Verification status of the user's account (`True` or `False`).  |
| `roleId`     | Identifier specifying the user's role or permissions. |

**Example**

```
curl --location '{{base_url}}/api/v1/user' -H 'Authorization: {{yourToken}}'
```

```JSON
    {
        "success": true,
        "message": "User data fetch successful",
        "data": {
            "user": {
                "_id": "6567833b40e7fd3fc45734bd",
                "email": "yourEmail@gmail.com",
                "username": "user11vRzaEFhjapd82MKIcC70Ao256kNOMb",
                "image": "https://storage.googleapis.com/fitnest-project-bucket/avatar/default.png",
                "verify": true,
                "roleId": "6560765f1844dab5919f6ea2"
            }
        }
    }
```

## 3.Edit User Image

***Note***
```
AllUserAuthenticate
```

**HTTP Request**

```
PUT /api/v1/user/image
```

**HTTP Headers**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `Authorization`      | User authentication token for API authorization.  |

**Request Body**

| Parameter         | Status     | Description                |
| :--------         | :-------   | :------------------------- |
| `image`           | `required` | Email address of the registered user. | 

**Response Body**

| Parameter | Description                |
| :-------- | :------------------------- |
| `success` | `True` if data edit is successful, `False` otherwise.  |
| `message` | Explanation of the outcome (success or failure details).  |
| `data`    | Container for user data.  |
| `user`    | Object containing updated user information.  |
| `_id`     | User ID.  |
| `email`   | User's email address.  |
| `username`| User's username.  |
| `image`   | URL of the user's updated profile image.  |
| `verify`  | Verification status of the user's account (`True` or `False`).  |
| `roleId`  | Identifier specifying the user's role or permissions.  |

**Example**

```
curl --location --request PUT '{{base_url}}/api/v1/user/image' -H 'Authorization: {{yourToken}}' \
--form 'image=@"{{localPath}}"'
```

```JSON
    {
        "success": true,
        "message": "User data edit successful",
        "data": {
            "user": {
                "_id": "6567833b40e7fd3fc45734bd",
                "email": "yourEmail@gmail.com",
                "username": "user11vRzaEFhjapd82MKIcC70Ao256kNOMb",
                "image": "https://storage.googleapis.com/fitnest-project-bucket/avatar/NEqmDUSWD5eoFcBRkNpEbQy5ZtU7RM9L-20231130-021834",
                "verify": true,
                "roleId": "6560765f1844dab5919f6ea2"
            }
        }
    }
```

## 4.Edit User Data

***Note***
```
AllUserAuthenticate
```

**HTTP Request**

```
PUT /api/v1/user
```

**HTTP Headers**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `Authorization`      | User authentication token for API authorization.  |

**Request Body**

| Parameter             | Status     | Description                |
| :--------             | :-------   | :------------------------- |
| `username`            | `optional` | New username for the user. | 
| `password`            | `optional` | New password for the user. |
| `confirmPassword`     | `optional` | Confirmation of the new password. Must match the provided password. |

**Response Body**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    | `True` if data edit is successful, `False` otherwise.  |
| `message`    | Explanation of the outcome (success or failure details).  |
| `data`       | Container for user data.  |
| `user`       | Object containing updated user information.  |
| `_id`        | User ID.  |
| `email`      | User's email address.  |
| `username`   | User's updated username.  |
| `image`      | URL of the user's profile image.  |
| `verify`     | Verification status of the user's account (`True` or `False`).  |
| `roleId`     | Identifier specifying the user's role or permissions.  |

**Example**
```
curl --location --request PUT '{{base_url}}/api/v1/user' -H 'Authorization: {{yourToken}}' \
--data-urlencode 'username=yourUsername' \
--data-urlencode 'password=newPassword' \
--data-urlencode 'confirmPassword=newPassword' \
```

```JSON
    {
     "success": true,
     "message": "User data edit successful",
     "data": {
        "user": {
            "_id": "655c05e0d05a925976afc071",
            "email": "yourEmail@gmail.com",
            "username": "yourUsername",
            "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/avatar/default_avatar.png",
            "verify": true,
            "roleId": "65526a6fa4cc0197cdb53483"
        }
     }
    }
```

## 5.Edit User Role

**HTTP Request**

```
PUT /api/v1/user/role
```

**HTTP Headers**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `Authorization`      | User authentication token for API authorization.  |

**Response Body**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    | `True` if data edit is successful, `False` otherwise.  |
| `message`    | Explanation of the outcome (success or failure details).  |
| `data`       | Container for user data.  |
| `user`       | Object containing updated user information.  |
| `_id`        | User ID.  |
| `email`      | User's email address.  |
| `username`   | User's username.  |
| `image`      | URL of the user's profile image.  |
| `verify`     | Verification status of the user's account (`True` or `False`).  |
| `roleId`     | Updated identifier specifying the user's role or permissions.  |

**Example**

```
curl --location --request PUT '{{base_url}}/api/v1/user/role' -H 'Authorization: {{yourToken}}'
```

```JSON
    {
     "success": true,
     "message": "User role edit successful",
     "data": {
        "user": {
            "_id": "655c05e0d05a925976afc071",
            "email": "yourEmail@gmail.com",
            "username": "yourUsername",
            "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/avatar/default_avatar.png",
            "verify": true,
            "roleId": "65526a6fa4cc0197cdb53484"
        }
     }
    }
```