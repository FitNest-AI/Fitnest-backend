# User

This Api is for User

## 1.fetchAllUserData

**HTTP Request**

```
    GET /api/v1/user/all
```

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    |   |
| `message`    |   |
| `data`       |   |
| `user`       |   |
| `_id`        |   |
| `email`      |   |
| `username`   |   |
| `image`      |   |
| `verify`     |   |
| `roleId`     |   |
| `count`      |   |

**Example**

```
curl --location 'localhost:3000/api/v1/user/all'
```

```JSON
    {
    "success": true,
    "message": "User all data fetch successful",
    "data": {
        "user": [
            {
                "_id": "655c05e0d05a925976afc071",
                "email": "rahman.adityaaa31@gmail.com",
                "username": "userEYIKFgmlh0PpULQEzEg7KoC5PwDItZyb",
                "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/avatar/default_avatar.png",
                "verify": true,
                "roleId": "65526a6fa4cc0197cdb53483"
            },
            {
                "_id": "656573975baf19362c520a54",
                "email": "adityarahman59@gmail.com",
                "username": "userDVIkhmVkFUSndlT2u4fx8rCX9nv9gjBk",
                "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/avatar/default_avatar.png",
                "verify": false,
                "roleId": "65526a6fa4cc0197cdb53483"
            }
        ],
        "count": 2
    }
}
```

## 2.fetchUserDataWhenLogin

**HTTP Request**

```
    GET /api/v1/user
```

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    |   |
| `message`    |   |
| `data`       |   |
| `user`       |   |
| `_id`        |   |
| `email`      |   |
| `username`   |   |
| `image`      |   |
| `verify`     |   |
| `roleId`     |   |

**Example**

```
curl --location 'localhost:3000/api/v1/user'
```

```JSON
    {
     "success": true,
     "message": "User data fetch successful",
     "data": {
        "user": {
            "_id": "655c05e0d05a925976afc071",
            "email": "rahman.adityaaa31@gmail.com",
            "username": "userEYIKFgmlh0PpULQEzEg7KoC5PwDItZyb",
            "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/avatar/default_avatar.png",
            "verify": true,
            "roleId": "65526a6fa4cc0197cdb53483"
        }
     }
    }
```

## 3.editUserImage

**HTTP Request**

```
    PUT /api/v1/user/image
```

**Request Body**

| Parameter | Description                |
| :-------- | :------------------------- |
| `image`   |   |

**Response**

```
| Parameter | Description                |
| :-------- | :------------------------- |
| `name`    |   |
```

**Example**

```
curl --location --request PUT 'localhost:3000/api/v1/user/image' \
--form 'image=@"c:\\Users\\zsyrhn22\\Downloads\\man.png"'
```

```JSON
```

## 4.editUserDataWhenLogin

**HTTP Request**

```
    PUT /api/v1/user
```

**Request Body**

| Parameter          | Description                |
| :----------------- | :------------------------- |
| `username`         |   |
| `password`         |   |
| `confirmPassword`  |   |

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    |   |
| `message`    |   |
| `data`       |   |
| `user`       |   |
| `_id`        |   |
| `email`      |   |
| `username`   |   |
| `image`      |   |
| `verify`     |   |
| `roleId`     |   |

**Example**
```
curl --location --request PUT 'localhost:3000/api/v1/user' \
--data-urlencode 'username=dota' \
--data-urlencode 'password=gampang' \
--data-urlencode 'confirmPassword=gampang'
```

```JSON
    {
     "success": true,
     "message": "User data edit successful",
     "data": {
        "user": {
            "_id": "655c05e0d05a925976afc071",
            "email": "rahman.adityaaa31@gmail.com",
            "username": "dota",
            "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/avatar/default_avatar.png",
            "verify": true,
            "roleId": "65526a6fa4cc0197cdb53483"
        }
     }
    }
```

## 5.editUserRole

**HTTP Request**

```
    PUT /api/v1/user/role
```

**Request Body**

| Parameter  | Description                |
| :--------- | :------------------------- |
| `roleId`   |   |

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    |   |
| `message`    |   |
| `data`       |   |
| `user`       |   |
| `_id`        |   |
| `email`      |   |
| `username`   |   |
| `image`      |   |
| `verify`     |   |
| `roleId`     |   |

**Example**

```
curl --location --request PUT 'localhost:3000/api/v1/user/role' \
--data-urlencode 'roleId=65526a6fa4cc0197cdb53484'
```

```JSON
    {
     "success": true,
     "message": "User role edit successful",
     "data": {
        "user": {
            "_id": "655c05e0d05a925976afc071",
            "email": "rahman.adityaaa31@gmail.com",
            "username": "dota",
            "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/avatar/default_avatar.png",
            "verify": true,
            "roleId": "65526a6fa4cc0197cdb53484"
        }
     }
    }
```