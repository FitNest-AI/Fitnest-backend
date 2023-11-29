# Exercise

This Api will be used to authenticate new user

## 1.insertExerciseData

**HTTP Request**

```
    POST /api/v1/exercise
```

**Request Body**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `name`            |   |
| `desc`            |   |
| `levelId`         |   |
| `targetMuscleId`  |   |
| `targetMuscleId`  |   |
| `SideId`          |   |
| `targetMuscleId`  |   |
| `Orientation`     |   |
| `Instruction`     |   |
| `Image`           |   |

**Response**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `name`            |   |
| `desc`            |   |
| `levelId`         |   |
| `targetMuscleId`  |   |
| `targetMuscleId`  |   |
| `SideId`          |   |
| `targetMuscleId`  |   |
| `Orientation`     |   |
| `Instruction`     |   |
| `Image`           |   |

**Example**

```
curl --location 'http://localhost:3000/api/v1/exercise' \
--form 'name="uwu"' \
--form 'desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"' \
--form 'levelId="{{levelId}}"' \
--form 'targetMuscleId="{{targetMuscleId1}}"' \
--form 'targetMuscleId="{{targetMuscleId2}}"' \
--form 'sideId="{{sideId}}"' \
--form 'orientation="potrait"' \
--form 'instruction="Lorem ipsum is placeholder text commonly used"' \
--form 'image=@"c:\\Users\\zsyrhn22\\Downloads\\cat.png"'
```

```JSON
```

## 2.fetchAllMoveData

**HTTP Request**

```
    GET /api/v1/exercise/all
```

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    |   |
| `message`    |   |
| `data`       |   |
| `exercise`   |   |
| `_id`        |   |
| `name`       |   |
| `image`      |   |
| `levelId`    |   |
| `_id`        |   |
| `name`       |   |
| `count`      |   |

**Example**

```
curl --location 'http://localhost:3000/api/v1/exercise/all'
```

```JSON
    {
    "success": true,
    "message": "Exercise all data fetch successful",
    "data": {
        "exercise": [
            {
                "_id": "6552f13f03dbf0159e051060",
                "name": "squat",
                "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533",
                "levelId": {
                    "_id": "65526a6fa4cc0197cdb53486",
                    "name": "newbie"
                }
            },
            {
                "_id": "6552f13f03dbf0159e051061",
                "name": "push-up",
                "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533",
                "levelId": {
                    "_id": "65526a6fa4cc0197cdb53487",
                    "name": "beginner"
                }
            },
            {
                "_id": "6552f13f03dbf0159e051062",
                "name": "pull-up",
                "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533",
                "levelId": {
                    "_id": "65526a6fa4cc0197cdb53488",
                    "name": "intermediate"
                }
            },
            {
                "_id": "6552f13f03dbf0159e051063",
                "name": "weighted dips",
                "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533",
                "levelId": {
                    "_id": "65526a6fa4cc0197cdb53489",
                    "name": "advanced"
                }
            },
            {
                "_id": "6552f13f03dbf0159e051064",
                "name": "crunches",
                "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533",
                "levelId": {
                    "_id": "65526a6fa4cc0197cdb53487",
                    "name": "beginner"
                }
            },
            {
                "_id": "6552f13f03dbf0159e051065",
                "name": "shoulder press",
                "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533",
                "levelId": {
                    "_id": "65526a6fa4cc0197cdb53488",
                    "name": "intermediate"
                }
            },
            {
                "_id": "6552f13f03dbf0159e051066",
                "name": "Romanian deadlift",
                "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533",
                "levelId": {
                    "_id": "65526a6fa4cc0197cdb53489",
                    "name": "advanced"
                }
            },
            {
                "_id": "6552f13f03dbf0159e051067",
                "name": "lunges",
                "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533",
                "levelId": {
                    "_id": "65526a6fa4cc0197cdb53486",
                    "name": "newbie"
                }
            },
            {
                "_id": "6552f13f03dbf0159e051068",
                "name": "tricep dips",
                "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533",
                "levelId": {
                    "_id": "65526a6fa4cc0197cdb53487",
                    "name": "beginner"
                }
            },
            {
                "_id": "6552f13f03dbf0159e051069",
                "name": "barbell rows",
                "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533",
                "levelId": {
                    "_id": "65526a6fa4cc0197cdb53489",
                    "name": "advanced"
                }
            }
        ],
        "count": 10
    }
}
```

## 3.fetchExerciseDataById

**HTTP Request**

```
    GET /api/v1/exercise/{{exerciseId}}
```

**Parameter**

| Parameter     | Status   | Description                |
| :------------ | :------- | :------------------------- |
| `exerciseId`  | ``       |  |

**Response**

| Parameter           | Description                |
| :------------------ | :------------------------- |
| `success`           |   |
| `message`           |   |
| `data`              |   |
| `exercise`          |   |
| `_id`               |   |
| `name`              |   |
| `desc`              |   |
| `image`             |   |
| `levelId`           |   |
| `_id`               |   |
| `name`              |   |
| `targetMuscleId`    |   |
| `_id`               |   |
| `name`              |   |
| `sideId`            |   |
| `_id`               |   |
| `name`              |   |
| `instruction`       |   |
| `Orientation`       |   |
| `instruction`       |   |

**Example**

```
curl --location -g 'http://localhost:3000/api/v1/exercise/6552f13f03dbf0159e051060'
```

```JSON
    {
     "success": true,
     "message": "Exercise data fetch successful",
     "data": {
        "exercise": {
            "_id": "6552f13f03dbf0159e051060",
            "name": "squat",
            "desc": "Squat is a fundamental lower body exercise that targets the quadriceps, hamstrings, and glutes. It also engages the core muscles for stability.",
            "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533",
            "levelId": {
                "_id": "65526a6fa4cc0197cdb53486",
                "name": "newbie"
            },
            "targetMuscleId": [
                {
                    "_id": "65526a70a4cc0197cdb53494",
                    "name": "legs"
                },
                {
                    "_id": "65526a70a4cc0197cdb53497",
                    "name": "chest"
                },
                {
                    "_id": "65526a70a4cc0197cdb53498",
                    "name": "back"
                }
            ],
            "sideId": {
                "_id": "65526a70a4cc0197cdb5349e",
                "name": "front",
                "instruction": "front instruction"
            },
            "orientation": "landscape",
            "instruction": "Stand with your feet shoulder-width apart. Lower your body by bending your knees and hips, as if sitting back into a chair. Keep your back straight and chest up. Rise back up to the starting position.",
            "__v": 0
        }
     }
    }
```

## 4.editMoveDataById

**HTTP Request**

```
    PUT /api/v1/exercise/{{exerciseId}}
```

**Parameter**

| Parameter     | Status   | Description                |
| :------------ | :------- | :------------------------- |
| `exerciseId`  | ``       |  |

**Request Body**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `name`            |   |
| `desc`            |   |
| `levelId`         |   |
| `targetMuscleId`  |   |
| `targetMuscleId`  |   |
| `SideId`          |   |
| `targetMuscleId`  |   |
| `Orientation`     |   |
| `Instruction`     |   |
| `Image`           |   |

**Response**

| Parameter           | Description                |
| :------------------ | :------------------------- |
| `success`           |   |
| `message`           |   |
| `data`              |   |
| `exercise`          |   |
| `_id`               |   |
| `name`              |   |
| `desc`              |   |
| `image`             |   |
| `levelId`           |   |
| `_id`               |   |
| `name`              |   |
| `targetMuscleId`    |   |
| `_id`               |   |
| `name`              |   |
| `sideId`            |   |
| `_id`               |   |
| `name`              |   |
| `instruction`       |   |
| `Orientation`       |   |
| `instruction`       |   |

**Example**

```
curl --location -g --request PUT 'http://localhost:3000/api/v1/exercise/{{exerciseId}}' \
--form 'name="plank"' \
--form 'desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"' \
--form 'levelId="{{levelId}}"' \
--form 'targetMuscleId="{{targetMuscleId1}}"' \
--form 'targetMuscleId="{{targetMuscleId2}}"' \
--form 'sideId="{{sideId}}"' \
--form 'orientation="potrait"' \
--form 'instruction="Lorem ipsum is placeholder text commonly used"' \
--form 'image=@"c:\\Users\\zsyrhn22\\Downloads\\Virtual Background Bangkit 2023.png"'
```

```JSON
```

## 5.deleteMoveDataById

**HTTP Request**

```
    DELETE /api/v1/exercise/{{exerciseId}}
```

**Parameter**

| Parameter     | Status   | Description                |
| :------------ | :------- | :------------------------- |
| `exerciseId`  | ``       |  |

**Response**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `success`         |   |
| `message`         |   |


**Example**

```
curl --location -g --request DELETE 'http://localhost:3000/api/v1/exercise/6552f13f03dbf0159e051060'
```

```JSON
    {
    "success": true,
    "message": "Exercise Data delete successful"
    }
```

## 6.searchExercise

**HTTP Request**

```
    GET /api/v1/exercise/search?q=up
```

**Parameter**

| Parameter     | Status   | Description                |
| :------------ | :------- | :------------------------- |
| `q`           | ``       |  |

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    |   |
| `message`    |   |
| `data`       |   |
| `exercise`   |   |
| `_id`        |   |
| `name`       |   |
| `image`      |   |
| `levelId`    |   |
| `_id`        |   |
| `name`       |   |

**Example**

```
curl --location 'http://localhost:3000/api/v1/exercise/search?q=up'
```

```JSON
    {
     "success": false,
     "message": "Exercise data successfully found",
     "exercise": [
        {
            "_id": "6552f13f03dbf0159e051062",
            "name": "pull-up",
            "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533",
            "levelId": {
                "_id": "65526a6fa4cc0197cdb53488",
                "name": "intermediate"
            }
        },
        {
            "_id": "6552f13f03dbf0159e051061",
            "name": "push-up",
            "image": "https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533",
            "levelId": {
                "_id": "65526a6fa4cc0197cdb53487",
                "name": "beginner"
            }
        }
     ]
    }
```
