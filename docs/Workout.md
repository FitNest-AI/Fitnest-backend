# Workout

This Api For Workout

## 1.insertWorkoutDataWhenLogin

**HTTP Request**

```
    POST /api/v1/user/workout
```

**Request Body**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `name`       |   |
| `desc`       |   |
| `rest`       |   |
| `day`        |   |
| `time`       |   |
| `moveset`    |   |
| `set`        |   |
| `rep`        |   |
| `exerciseId` |   |

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    |   |
| `message`    |   |
| `data`       |   |
| `workout`    |   |
| `name`       |   |
| `desc`       |   |
| `day`        |   |
| `time`       |   |
| `rest`       |   |
| `moveset`    |   |
| `set`        |   |
| `rep`        |   |
| `exerciseId` |   |
| `_id`        |   |

**Example**

```
curl --location 'http://localhost:3000/api/v1/user/workout' \
--data '{
  "name": "eren",
  "desc": "males, mao rumbling aja",
  "rest": 60,
  "day": "sunday",
  "time": "05:30",
  "moveset": [
      {
        "set": 2,
        "rep": 10,
        "exerciseId": "6552f13f03dbf0159e051060"
      },
      {
        "set": 1,
        "rep": 20,
        "exerciseId": "6552f13f03dbf0159e051062"
      }
    ]
}'
```

```JSON
    {
     "success": true,
     "message": "Workout data insert successful",
     "data": {
        "workout": {
            "name": "eren",
            "desc": "males, mao rumbling aja",
            "day": "sunday",
            "time": "05:30",
            "rest": 60,
            "moveset": [
                {
                    "set": 2,
                    "rep": 10,
                    "exerciseId": "6552f13f03dbf0159e051060",
                    "_id": "6566e0f78b19eeb32583530b"
                },
                {
                    "set": 1,
                    "rep": 20,
                    "exerciseId": "6552f13f03dbf0159e051062",
                    "_id": "6566e0f78b19eeb32583530c"
                }
            ],
            "userId": "655c05e0d05a925976afc071",
            "_id": "6566e0f78b19eeb32583530a"
        }
     }
    }
```

## 2.fetchWorkoutDataWhenLogin

**HTTP Request**

```
    GET /api/v1/user/workout/{{workoutId}}
```

**Parameter**

| Parameter   | Status   | Description                |
| :---------- | :------- | :------------------------- |
| `workoutId` | ``       |  |

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    |   |
| `message`    |   |
| `data`       |   |
| `workout`    |   |
| `name`       |   |
| `desc`       |   |
| `day`        |   |
| `time`       |   |
| `rest`       |   |
| `moveset`    |   |
| `set`        |   |
| `rep`        |   |
| `exerciseId` |   |
| `_id`        |   |
| `name`       |   |
| `desc`       |   |
| `levelId`    |   |
| `_id`        |   |
| `name`       |   |
| `_id`        |   |



**Example**

```
curl --location -g 'http://localhost:3000/api/v1/user/workout/6566e2a28b19eeb32583531d'
```

```JSON
    {
     "success": true,
     "message": "Workout data fetch successful",
     "data": {
        "workout": {
            "_id": "6566e2a28b19eeb32583531d",
            "name": "eren",
            "desc": "males, mao rumbling aja",
            "day": "sunday",
            "time": "05:30",
            "rest": 60,
            "moveset": [
                {
                    "set": 2,
                    "rep": 10,
                    "exerciseId": {
                        "_id": "6552f13f03dbf0159e051064",
                        "name": "crunches",
                        "desc": "Crunches are a basic abdominal exercise that targets the rectus abdominis. It is effective for building core strength and definition.",
                        "levelId": {
                            "_id": "65526a6fa4cc0197cdb53487",
                            "name": "beginner"
                        }
                    },
                    "_id": "6566e2a28b19eeb32583531e"
                },
                {
                    "set": 1,
                    "rep": 20,
                    "exerciseId": {
                        "_id": "6552f13f03dbf0159e051062",
                        "name": "pull-up",
                        "desc": "Pull-up is a challenging upper body exercise that targets the back, biceps, and shoulders. It helps build strength and muscle definition in the upper body.",
                        "levelId": {
                            "_id": "65526a6fa4cc0197cdb53488",
                            "name": "intermediate"
                        }
                    },
                    "_id": "6566e2a28b19eeb32583531f"
                }
            ]
        }
     }
    }

```

## 3.editWorkoutDataByIdWhenLogin

**HTTP Request**

```
    PUT /api/v1/user/workout/{{workoutId}}
```

**Parameter**

| Parameter   | Status   | Description                |
| :---------- | :------- | :------------------------- |
| `workoutId` | ``       |  |

**Request Body**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `name`       |   |
| `desc`       |   |
| `rest`       |   |

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `name`       |   |
| `desc`       |   |
| `rest`       |   |

**Example**

```
curl --location -g --request PUT 'http://localhost:3000/api/v1/user/workout/{{workoutId}}' \
--data-urlencode 'name=latihan goku' \
--data-urlencode 'desc=latihan di ruangan dengan tekanan gravitasi tinggi' \
--data-urlencode 'rest=15'
```

```JSON
```

## 4.fetchAllWorkoutData

**HTTP Request**

```
    GET /api/v1/user/workout/all
```

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    |   |
| `message`    |   |
| `data`       |   |
| `workout`    |   |
| `_id`        |   |
| `name`       |   |
| `desc`       |   |
| `rest`       |   |
| `day`        |   |
| `time`       |   |
| `moveset`    |   |
| `count`      |   |
| `exerciseId` |   |
| `_id`        |   |

**Example**

```
curl --location 'http://localhost:3000/api/v1/user/workout/all'
```

```JSON
    {
    "success": true,
    "message": "Workout all data fetch successful",
    "data": {
        "workout": [
            {
                "_id": "6566e2a28b19eeb32583531d",
                "name": "eren",
                "desc": "males, mao rumbling aja",
                "rest": 60,
                "day": "sunday",
                "time": "05:30",
                "moveset": 2
            }
        ],
        "count": 1
     }
    }
```

## 5.deleteWorkoutDataByIdWhenLogin

**HTTP Request**

```
    DELETE /api/v1/user/workout/{{workoutId}}
```

**Parameter**

| Parameter   | Status   | Description                |
| :---------- | :------- | :------------------------- |
| `workoutId` | ``       |  |

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    |   |
| `message`    |   |

**Example**

```
curl --location -g --request DELETE 'http://localhost:3000/api/v1/user/workout/6566e0f78b19eeb32583530a'
```

```JSON
    {
    "success": true,
    "message": "Workout data delete successful"
    }
```

## 6.insertMovesetInWorkoutWhenLogin

**HTTP Request**

```
    POST /api/v1/user/workout/{{workoutId}}/moveset
```

**Parameter**

| Parameter   | Status   | Description                |
| :---------- | :------- | :------------------------- |
| `workoutId` | ``       |  |

**Request Body**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `rep`        |   |
| `set`        |   |
| `exerciseId` |   |


**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    |   |
| `message`    |   |
| `workout`    |   |
| `_id`        |   |
| `name`       |   |
| `desc`       |   |
| `day`        |   |
| `time`       |   |
| `rest`       |   |
| `moveset`    |   |
| `set`        |   |
| `rep`        |   |
| `exerciseId` |   |
| `_id`        |   |
| `userId`     |   |
| `createdAt`  |   |
| `updatedAt`  |   |
| `__v`        |   |

**Example**

```
curl --location -g 'http://localhost:3000/api/v1/user/workout/6566e2a28b19eeb32583531d/moveset' \
--data-urlencode 'rep=20' \
--data-urlencode 'set=1' \
--data-urlencode 'exerciseId=6552f13f03dbf0159e051069'
```

```JSON
    {
     "success": true,
     "message": "Moveset data insert successful",
     "workout": {
        "_id": "6566e2a28b19eeb32583531d",
        "name": "eren",
        "desc": "males, mao rumbling aja",
        "day": "sunday",
        "time": "05:30",
        "rest": 60,
        "moveset": [
            {
                "set": 2,
                "rep": 10,
                "exerciseId": "6552f13f03dbf0159e051064",
                "_id": "6566e2a28b19eeb32583531e"
            },
            {
                "set": 1,
                "rep": 20,
                "exerciseId": "6552f13f03dbf0159e051062",
                "_id": "6566e2a28b19eeb32583531f"
            },
            {
                "set": 1,
                "rep": 20,
                "exerciseId": "6552f13f03dbf0159e051069",
                "_id": "6566e6228b19eeb32583533b"
            }
        ],
        "userId": "655c05e0d05a925976afc071",
        "createdAt": "2023-11-29T07:05:06.094Z",
        "updatedAt": "2023-11-29T07:20:02.973Z",
        "__v": 0
     }
    }
```

## 7.deleteMoveseitInWorkoutDataByIdWhenLogin

**HTTP Request**

```
    DELETE /api/v1/user/workout/{{workoutId}}/moveset/{{movesetId}}
```

**Parameter**

| Parameter   | Status   | Description                |
| :---------- | :------- | :------------------------- |
| `workoutId` | ``       |  |
| `movesetId` | ``       |  |

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    |   |
| `message`    |   |
| `workout`    |   |
| `_id`        |   |
| `name`       |   |
| `desc`       |   |
| `day`        |   |
| `time`       |   |
| `rest`       |   |
| `moveset`    |   |
| `set`        |   |
| `rep`        |   |
| `exerciseId` |   |
| `_id`        |   |
| `userId`     |   |
| `createdAt`  |   |
| `updatedAt`  |   |
| `__v`        |   |

**Example**

```
curl --location -g --request DELETE 'http://localhost:3000/api/v1/user/workout/6566e2a28b19eeb32583531d/moveset/6566e6228b19eeb32583533b'
```

```JSON
    {
     "success": true,
     "message": "moveset data delete successful",
     "workout": {
        "_id": "6566e2a28b19eeb32583531d",
        "name": "eren",
        "desc": "males, mao rumbling aja",
        "day": "sunday",
        "time": "05:30",
        "rest": 60,
        "moveset": [
            {
                "set": 2,
                "rep": 10,
                "exerciseId": "6552f13f03dbf0159e051064",
                "_id": "6566e2a28b19eeb32583531e"
            },
            {
                "set": 1,
                "rep": 20,
                "exerciseId": "6552f13f03dbf0159e051062",
                "_id": "6566e2a28b19eeb32583531f"
            }
        ],
        "userId": "655c05e0d05a925976afc071",
        "createdAt": "2023-11-29T07:05:06.094Z",
        "updatedAt": "2023-11-29T07:25:50.466Z",
        "__v": 0
     }
    }
```