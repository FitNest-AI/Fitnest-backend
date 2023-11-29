# Target Muscle

This Api for target Muscle

## 1.insertTargetMuscleData

**HTTP Request**

```
    POST /api/v1/target-muscle
```

**Request Body**

| Parameter | Description                |
| :-------- | :------------------------- |
| `name`    |   |

**Response**

| Parameter        | Description                |
| :--------------- | :------------------------- |
| `success`        |   |
| `message`        |   |
| `data`           |   |
| `targetMuscle`   |   |
| `_id`            |   |
| `name`           |   |
| `__v`            |   |

**Example**

```
curl --location 'http://localhost:3000/api/v1/target-muscle' \
--data '{
  "name": "feet"
}'
```

```JSON
    {
     "success": true,
     "message": "TargetMuscle data insert successful",
     "data": {
        "targetMuscle": {
            "name": "feet",
            "_id": "656692fa5baf19362c520a70",
            "__v": 0
        }
     }
    } 
```

## 2.fetchTargetMuscleDataById

**HTTP Request**

```
    GET /api/v1/target-muscle/{{targetMuscleId}}
```

**Parameter**

| Parameter        | Status   | Description                |
| :--------------- | :------- | :------------------------- |
| `targetMuscleId` | ``       |  |

**Response**

| Parameter        | Description                |
| :--------------- | :------------------------- |
| `success`        |   |
| `message`        |   |
| `data`           |   |
| `targetMuscle`   |   |
| `_id`            |   |
| `name`           |   |
| `__v`            |   |

**Example**

```
curl --location -g 'http://localhost:3000/api/v1/target-muscle/656692fa5baf19362c520a70'
```

```JSON
    {
     "success": true,
     "message": "Target muscle data fetch successful",
     "data": {
        "targetMuscle": {
            "_id": "656692fa5baf19362c520a70",
            "name": "feet",
            "__v": 0
        }
     }
    }
```

## 3.editTargetMuscleDataById

**HTTP Request**

```
    PUT /api/v1/target-muscle/{{targetMuscleId}}
```

**Parameter**

| Parameter        | Status   | Description                |
| :--------------- | :------- | :------------------------- |
| `targetMuscleId` | ``       |  |

**Request Body**

| Parameter | Description                |
| :-------- | :------------------------- |
| `name`    |   |

**Response**

| Parameter        | Description                |
| :--------------- | :------------------------- |
| `success`        |   |
| `message`        |   |
| `data`           |   |
| `targetMuscle`   |   |
| `_id`            |   |
| `name`           |   |
| `__v`            |   |

**Example**

```
curl --location -g --request PUT 'http://localhost:3000/api/v1/target-muscle/656692fa5baf19362c520a70' \
--data '{
  "name": "hand"
}'
```

```JSON
    {
     "success": true,
     "message": "Target muscle data edit successful",
     "data": {
        "targetMuscle": {
            "_id": "656692fa5baf19362c520a70",
            "name": "hand",
            "__v": 0
        }
     }
    }
```

## 4.fetchAllTargetMuscleData

**HTTP Request**

```
    GET /api/v1/target-muscle/all
```

**Response**

| Parameter        | Description                |
| :--------------- | :------------------------- |
| `success`        |   |
| `message`        |   |
| `data`           |   |
| `targetMuscle`   |   |
| `_id`            |   |
| `name`           |   |
| `__v`            |   |
| `count`          |   |

**Example**

```
curl --location 'http://localhost:3000/api/v1/target-muscle/all'
```

```JSON
    {
    "success": true,
    "message": "Target muscle all data fetch successful",
    "data": {
        "targetMuscle": [
            {
                "_id": "65526a70a4cc0197cdb53494",
                "name": "legs",
                "__v": 0
            },
            {
                "_id": "65526a70a4cc0197cdb53495",
                "name": "triceps",
                "__v": 0
            },
            {
                "_id": "65526a70a4cc0197cdb53496",
                "name": "glutes",
                "__v": 0
            },
            {
                "_id": "65526a70a4cc0197cdb53497",
                "name": "chest",
                "__v": 0
            },
            {
                "_id": "65526a70a4cc0197cdb53498",
                "name": "back",
                "__v": 0
            },
            {
                "_id": "65526a70a4cc0197cdb53499",
                "name": "abs",
                "__v": 0
            },
            {
                "_id": "65526a70a4cc0197cdb5349a",
                "name": "shoulders",
                "__v": 0
            },
            {
                "_id": "65526a70a4cc0197cdb5349b",
                "name": "biceps",
                "__v": 0
            },
            {
                "_id": "65526a70a4cc0197cdb5349c",
                "name": "hamstrings",
                "__v": 0
            },
            {
                "_id": "656692fa5baf19362c520a70",
                "name": "hand",
                "__v": 0
            }
        ],
        "count": 10
    }
}
```

## 5.deleteTargetMuscleDataById

**HTTP Request**

```
    DELETE /api/v1/target-muscle/{{targetMuscleId}}
```

**Parameter**

| Parameter        | Status   | Description                |
| :--------------- | :------- | :------------------------- |
| `targetMuscleId` | ``       |  |

**Response**

| Parameter | Description                |
| :-------- | :------------------------- |
| `success` |   |
| `message` |   |

**Example**

```
curl --location -g --request DELETE 'http://localhost:3000/api/v1/target-muscle/656692fa5baf19362c520a70'
```

```JSON
    {
    "success": true,
    "message": "Target muscle data delete successful"
    }
```
