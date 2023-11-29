# Level

This Api is for level

## 1.insertLevelData

**HTTP Request**

```
    POST /api/v1/level
```

**Request Body**

| Parameter | Description                |
| :-------- | :------------------------- |
| `name`    |   |

**Response**

| Parameter | Description                |
| :-------- | :------------------------- |
| `success` |   |
| `message` |   |
| `data`    |   |
| `level`   |   |
| `_id`     |   |
| `name`    |   |
| `__v`     |   |

**Example**

```
curl --location 'http://localhost:3000/api/v1/level' \
--data '{
  "name": "mudah"
}'
```

```JSON
    {
     "success": true,
     "message": "Level data insert successful",
     "data": {
        "level": {
            "name": "mudah",
            "_id": "6566801f5baf19362c520a69",
            "__v": 0
        }
     }
    }
```

## 2.fetchLevelDataById

**HTTP Request** 

```
    GET /api/v1/level/{{levelId}}
```

**Parameter**

| Parameter | Status   | Description                |
| :-------- | :------- | :------------------------- |
| `levelId` | ``       |  |

**Response**

| Parameter | Description                |
| :-------- | :------------------------- |
| `success` |   |
| `message` |   |
| `data`    |   |
| `level`   |   |
| `_id`     |   |
| `name`    |   |
| `__v`     |   |

**Example**

```
curl --location -g 'http://localhost:3000/api/v1/level/65526a6fa4cc0197cdb53487'
```

```JSON
    {
     "success": true,
     "message": "Level data fetch successful",
     "data": {
        "level": {
            "_id": "65526a6fa4cc0197cdb53487",
            "name": "beginner",
            "__v": 0
        }
     }
    }
```

## 3.editLevelDataById

**HTTP Request**

```
    PUT /api/v1/level/{{levelId}}
```

**Parameter**

| Parameter | Status   | Description                |
| :-------- | :------- | :------------------------- |
| `levelId` | ``       |  |

**Request Body**

| Parameter | Description                |
| :-------- | :------------------------- |
| `name`    |   |

**Response**

| Parameter | Description                |
| :-------- | :------------------------- |
| `success` |   |
| `message` |   |
| `data`    |   |
| `level`   |   |
| `_id`     |   |
| `name`    |   |
| `__v`     |   |

**Example**

```
curl --location -g --request PUT 'http://localhost:3000/api/v1/level/{{levelId}}' \
--data '{
  "name": "sepuh"
}'
```

```JSON
    {
     "success": true,
     "message": "Level data edit successful",
     "data": {
        "level": {
            "_id": "6566801f5baf19362c520a69",
            "name": "sepuh",
            "__v": 0
        }
     }
    }
```

## 4.fetchAllLevelData

**HTTP Request**

```
    GET /api/v1/level/all
```

**Response**

| Parameter | Description                |
| :-------- | :------------------------- |
| `success` |   |
| `message` |   |
| `data`    |   |
| `goal`    |   |
| `_id`     |   |
| `name`    |   |
| `__v`     |   |
| `count`   |   |

**Example**

```
curl --location 'http://localhost:3000/api/v1/level/all'
```

```JSON
    {
     "success": true,
     "message": "Level all data fetch successful",
     "data": {
        "level": [
            {
                "_id": "65526a6fa4cc0197cdb53486",
                "name": "newbie",
                "__v": 0
            },
            {
                "_id": "65526a6fa4cc0197cdb53487",
                "name": "beginner",
                "__v": 0
            },
            {
                "_id": "65526a6fa4cc0197cdb53488",
                "name": "intermediate",
                "__v": 0
            },
            {
                "_id": "65526a6fa4cc0197cdb53489",
                "name": "advanced",
                "__v": 0
            },
            {
                "_id": "655c1b5dd05a925976afc07e",
                "name": "ez",
                "__v": 0
            },
            {
                "_id": "6566801f5baf19362c520a69",
                "name": "mudah",
                "__v": 0
            }
        ],
        "count": 6
     }
    }
```

## 5.deleteLevelDataById

**HTTP Request**

```
    DELETE /api/v1/level/{{levelId}}
```

**Parameter**

| Parameter | Status   | Description                |
| :-------- | :------- | :------------------------- |
| `levelId` | ``       |  |

**Response**

| Parameter | Description                |
| :-------- | :------------------------- |
| `success` |   |
| `message` |   |

**Example**

```
curl --location -g --request DELETE 'http://localhost:3000/api/v1/level/6566801f5baf19362c520a69'
```

```JSON
    {
    "success": true,
    "message": "Level data delete successful"
    }
```
