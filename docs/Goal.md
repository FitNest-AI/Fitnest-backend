# Goal

This Api will be used to authenticate new user

## 1.fetchAllGoalData

**HTTP Request**

```
    GET /api/v1/goal/all
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
curl --location 'http://localhost:3000/api/v1/goal/all'
```

```JSON
    {
     "success": true,
     "message": "fetch all goal data successful",
     "data": {
        "goal": [
            {
                "_id": "65526a70a4cc0197cdb534a2",
                "name": "gain muscle",
                "__v": 0
            },
            {
                "_id": "65526a70a4cc0197cdb534a3",
                "name": "lose weight",
                "__v": 0
            },
            {
                "_id": "65526a70a4cc0197cdb534a4",
                "name": "keep fit",
                "__v": 0
            },
            {
                "_id": "65526a70a4cc0197cdb534a5",
                "name": "improving posture",
                "__v": 0
            }
        ],
        "count": 4
     }
    }
```

## 2.fetchGoalDataById

**HTTP Request**

```
    GET /api/v1/goal/{{goalId}}
```

**Parameter**

| Parameter | Status   | Description                |
| :-------- | :------- | :------------------------- |
| `goalId`  | ``       |  |

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

**Example**

```
curl --location -g 'http://localhost:3000/api/v1/goal/65526a70a4cc0197cdb534a4'
```

```JSON
    {
     "success": true,
     "message": "fetch goal data successful",
     "data": {
        "goal": {
            "_id": "65526a70a4cc0197cdb534a4",
            "name": "keep fit",
            "__v": 0
        }
     }
    }
```

## 3.editGoalDataById

**HTTP Request**

```
    PUT /api/v1/goal/{{goalId}}
```

**Parameter**

| Parameter | Status   | Description                |
| :-------- | :------- | :------------------------- |
| `goalId`  | ``       |  |

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
| `goal`    |   |
| `_id`     |   |
| `name`    |   |
| `__v`     |   |

**Example**

```
curl --location -g --request PUT 'http://localhost:3000/api/v1/goal/65526a70a4cc0197cdb534a4' \
--data '{
  "name": "keep fit and healthy"
}'
```

```JSON
    {
     "success": true,
     "message": "Goal data edit successful",
     "data": {
        "goal": {
            "_id": "65526a70a4cc0197cdb534a4",
            "name": "keep fit and healthy",
            "__v": 0
        }
     }
    }
```

## 4.deleteGoalDataById

**HTTP Request**

```
    DELETE /api/v1/goal/{{goalId}}
```

**Parameter**

| Parameter | Status   | Description                |
| :-------- | :------- | :------------------------- |
| `goalId`  | ``       |  |

**Response**

| Parameter | Description                |
| :-------- | :------------------------- |
| `success` |   |
| `message` |   |

**Example**

```
curl --location -g --request DELETE 'http://localhost:3000/api/v1/goal/65667ebb5baf19362c520a66'
```

```JSON
    {
     "success": true,
     "message": "Goal data delete successful"
    }
```

## 5. insertGoalData

**HTTP Request**

```
    POST /api/v1/goal
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
| `goal`    |   |
| `_id`     |   |
| `name`    |   |
| `__v`     |   |

**Example**

```
curl --location 'http://localhost:3000/api/v1/goal' \
--data '{
  "name": "healthy"
}'
```

```JSON
    {
     "success": true,
     "message": "Goal data insert successful",
     "data": {
        "goal": {
            "name": "healthy",
            "_id": "6566cf308b19eeb3258352cb",
            "__v": 0
        }
    }
 }
```