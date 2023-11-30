# Exercise

This Api will be used to authenticate new user

## 1.Fetch All Exercise Data

**HTTP Request**

```
    GET /api/v1/exercise/all
```

**Response Body**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    | `True` if data fetch is successful, `False` otherwise.  |
| `message`    | Explanation of the outcome (success or failure details).  |
| `data`       | Container for exercise data.  |
| `exercise`   | Array of exercise information.  |
| `_id`        | Exercise identifier.  |
| `name`       | Exercise name.  |
| `image`      | URL for the exercise image.  |
| `levelId`    | Identifier specifying the exercise level. |
| `count`      | Total exercise data |

**Example**

```
curl --location 'http://{{base_url}}/api/v1/exercise/all'
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

## 2.Insert Exercise Data

**HTTP Request**

```
    POST /api/v1/exercise
```

**Request Body**

| Parameter         | Status     | Description                |
| :--------         | :-------   | :------------------------- |
| `name`            | `required` | Exercise name. | 
| `desc`            | `required` | Exercise description. | 
| `levelId`         | `required` | Identifier specifying the exercise level. | 
| `targetMuscleId`  | `required` | Array of identifiers specifying the target muscles. | 
| `SideId`          | `required` | Identifier specifying the exercise side. | 
| `Orientation`     | `required` | Exercise orientation (e.g., `portrait` or `landscape`). | 
| `Instruction`     | `required` | Exercise instructions. | 
| `image`           | `required` | URL or file path for the exercise image. | 

**Response Body**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `success`         | `True` if data insert is successful, `False` otherwise.  |
| `message`         | Explanation of the outcome (success or failure details).  |
| `data`            | Container for inserted exercise data.  |
| `exercise`        | Object containing exercise information.  |
| `_id`             | Exercise identifier.  |
| `name`            | Exercise name.  |
| `desc`            | Exercise description. |
| `Image`           | URL for the exercise image.  |
| `levelId`         | Identifier specifying the exercise level.  |
| `SideId`          | Array of identifiers specifying the target muscles.  |
| `targetMuscleId`  | Identifier specifying the exercise side.  |
| `Orientation`     | Exercise orientation.  |
| `Instruction`     | Exercise instructions.  |

**Example**

```
curl --location 'http://{{base_url}}/api/v1/exercise' \
--form 'name="plank"' \
--form 'desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"' \
--form 'levelId="{{levelId}}"' \
--form 'targetMuscleId="{{targetMuscleId1}}"' \
--form 'targetMuscleId="{{targetMuscleId2}}"' \
--form 'sideId="{{sideId}}"' \
--form 'orientation="potrait"' \
--form 'instruction="Lorem ipsum is placeholder text commonly used"' \
--form 'image=@"{{localPath}}"'
```

```JSON
    {
        "success": true,
        "message": "Exercise data insert successful",
        "data": {
            "exercise": {
                "name": "plank",
                "desc": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
                "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/YC4JprjW5TtmS9PFqhwxAtW5OSA7MCg9-20231130-160328",
                "levelId": "6560765f1844dab5919f6eab",
                "targetMuscleId": [
                    "6560765f1844dab5919f6ebf",
                    "6560765f1844dab5919f6ec5"
                ],
                "sideId": "6560765f1844dab5919f6eba",
                "orientation": "potrait",
                "instruction": "Lorem ipsum is placeholder text commonly used",
                "_id": "65684fe0dcff123cb04d6856",
                "__v": 0
            }
        }
    }
```

## 3.Fetch Detail Exercise Data

**HTTP Request**

```
    GET /api/v1/exercise/{{exerciseId}}
```

**Parameter**

| Parameter     | Status     | Description                |
| :------------ | :-------   | :------------------------- |
| `exerciseId`  | `required` | Exercise identifier. |

**Response Body**

| Parameter           | Description                |
| :------------------ | :------------------------- |
| `success`           | `True` if data fetch is successful, `False` otherwise.  |
| `message`           | Explanation of the outcome (success or failure details). |
| `data`              | Container for fetched exercise data.  |
| `exercise`          | Object containing exercise information.  |
| `levelId`           | Identifier specifying the exercise level.  |
| `targetMuscleId`    | Array of identifiers specifying the target muscles.  |
| `sideId`            | Identifier specifying the exercise side.  |
| `Orientation`       | Exercise orientation.  |
| `instruction`       | Exercise instructions.  |

**Example**

```
curl --location -g 'http://{{base_url}}/api/v1/exercise/6552f13f03dbf0159e051060'
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

## 4.Edit Exercise Data

**HTTP Request**

```
    PUT /api/v1/exercise/{{exerciseId}}
```

**Parameter**

| Parameter     | Status     | Description                |
| :------------ | :-------   | :------------------------- |
| `exerciseId`  | `required` | Exercise identifier. |

**Request Body**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `name`            | Exercise name.  |
| `desc`            | Exercise description.  |
| `Image`           | URL or file path for the exercise image.  |
| `levelId`         | Identifier specifying the exercise level.  |\
| `targetMuscleId`  | Array of identifiers specifying the target muscles.  |
| `SideId`          | Exercise orientation.  |
| `Orientation`     | Exercise orientation.  |
| `Instruction`     | Exercise instructions.  |

**Response Body**

| Parameter           | Description                |
| :------------------ | :------------------------- |
| `success`           | `True` if data edit is successful, `False` otherwise.  |
| `message`           | Explanation of the outcome (success or failure details).  |
| `data`              | Container for edited exercise data.  |
| `exercise`          | Object containing exercise information.  |
| `levelId`           | Identifier specifying the exercise level.  |
| `targetMuscleId`    | Array of identifiers specifying the target muscles.  |
| `sideId`            | Identifier specifying the exercise side.  |
| `Orientation`       | Exercise orientation.  |
| `instruction`       | Exercise instructions.  |

**Example**

```
curl --location -g --request PUT 'http://{{base_url}}/api/v1/exercise/{{exerciseId}}' \
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
    {
        "success": true,
        "message": "Exercise Data edit successful",
        "data": {
            "exercise": {
                "_id": "65684fe0dcff123cb04d6856",
                "name": "plank",
                "desc": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
                "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/YPqcTyDuIfpaSyr6EiPj3nRbDA6EE3F5-20231130-161544",
                "levelId": "6560765f1844dab5919f6eab",
                "targetMuscleId": [
                    "6560765f1844dab5919f6ebf",
                    "6560765f1844dab5919f6ec5"
                ],
                "sideId": "6560765f1844dab5919f6eba",
                "orientation": "potrait",
                "instruction": "Lorem ipsum is placeholder text commonly used",
                "__v": 0
            }
        }
    }
```

## 5.Delete Exercise Data

**HTTP Request**

```
    DELETE /api/v1/exercise/{{exerciseId}}
```

**Parameter**

| Parameter     | Status        | Description                |
| :------------ | :-------      | :------------------------- |
| `exerciseId`  | `required`    | Exercise identifier. |

**Response Body**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `success`         | True if data delete is successful, False otherwise.  |
| `message`         | Explanation of the outcome (success or failure details).  |


**Example**

```
curl --location -g --request DELETE 'http://{{base_url}}/api/v1/exercise/6552f13f03dbf0159e051060'
```

```JSON
    {
        "success": true,
        "message": "Exercise Data delete successful"
    }
```

## 6.Search Exercise Data

**HTTP Request**

```
    GET /api/v1/exercise/search?page={{page}}&q={{query}}&targetMuscle={{targetMuscleId}}&level={{levelId}}&side={{sideId}}
```

**Query**

| Parameter         | Status        | Description                |
| :------------     | :-------      | :------------------------- |
| `page`            | `optional`    | Page number for pagination. |
| `q`               | `optional`    | Search query string. |
| `targetMuscle`    | `optional`    | Identifier for filtering exercises by target muscle. |
| `level`           | `optional`    | Identifier for filtering exercises by level. |
| `side`            | `optional`    | Identifier for filtering exercises by side. |

**Response Body**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    | True if data is found, False otherwise.  |
| `message`    | Explanation of the outcome (success or failure details).  |
| `data`       | Container for exercise data.  |
| `exercise`   | Array of exercise information.  |
| `_id`        | Exercise identifier.  |
| `name`       | Exercise name.  |
| `image`      | URL for the exercise image.  |
| `levelId`    | Identifier specifying the exercise level.  |

**Example**

```
curl --location 'http://{{base_url}}/api/v1/exercise/search?page=1&q=up&targetMuscle=6560765f1844dab5919f6ebe&level=6560765f1844dab5919f6eab&side=6560765f1844dab5919f6eba'
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
