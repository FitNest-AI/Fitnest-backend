# Exercise

This Api will be used to provide Exercise Data.

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
        "_id": "657e34fa680cfbc894fcb50e",
        "name": "squat",
        "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png",
        "levelId": {
          "_id": "657e033a7744a82ac69b8e92",
          "name": "easy"
        }
      },
      {
        "_id": "657e34fa680cfbc894fcb50f",
        "name": "push-up",
        "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png",
        "levelId": {
          "_id": "657e033a7744a82ac69b8e92",
          "name": "easy"
        }
      },
      {
        "_id": "657e34fa680cfbc894fcb510",
        "name": "sit-up",
        "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png",
        "levelId": {
          "_id": "657e033a7744a82ac69b8e92",
          "name": "easy"
        }
      },
      {
        "_id": "657e34fa680cfbc894fcb511",
        "name": "Barbell Bicep Curl",
        "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png",
        "levelId": {
          "_id": "657e033a7744a82ac69b8e92",
          "name": "easy"
        }
      },
      {
        "_id": "657e34fa680cfbc894fcb512",
        "name": "Hammer Curl",
        "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png",
        "levelId": {
          "_id": "657e033a7744a82ac69b8e92",
          "name": "easy"
        }
      },
      {
        "_id": "657e34fa680cfbc894fcb513",
        "name": "Hip Thrust",
        "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png",
        "levelId": {
          "_id": "657e033a7744a82ac69b8e92",
          "name": "easy"
        }
      },
      {
        "_id": "657e34fa680cfbc894fcb514",
        "name": "Lateral Raise",
        "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png",
        "levelId": {
          "_id": "657e033a7744a82ac69b8e92",
          "name": "easy"
        }
      },
      {
        "_id": "657e34fa680cfbc894fcb515",
        "name": "Leg Raise",
        "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png",
        "levelId": {
          "_id": "657e033a7744a82ac69b8e92",
          "name": "easy"
        }
      },
      {
        "_id": "657e34fa680cfbc894fcb516",
        "name": "Pull-up",
        "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png",
        "levelId": {
          "_id": "657e033a7744a82ac69b8e92",
          "name": "easy"
        }
      },
      {
        "_id": "657e34fa680cfbc894fcb517",
        "name": "Russian Twist",
        "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png",
        "levelId": {
          "_id": "657e033a7744a82ac69b8e92",
          "name": "easy"
        }
      },
      {
        "_id": "657e34fa680cfbc894fcb518",
        "name": "Tricep Dips",
        "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png",
        "levelId": {
          "_id": "657e033a7744a82ac69b8e92",
          "name": "easy"
        }
      },
      {
        "_id": "657e34fa680cfbc894fcb519",
        "name": "Tricep Pushdown",
        "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png",
        "levelId": {
          "_id": "657e033a7744a82ac69b8e92",
          "name": "easy"
        }
      }
    ],
    "count": 12
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
| `direction`       | `required` | Exercise direction (e.g., `front` or `side`). | 
| `Orientation`     | `required` | Exercise orientation (e.g., `portrait` or `landscape`). | 
| `Instruction`     | `required` | Exercise instructions. | 
| `image`           | `required` | URL or file path for the exercise image. | 
| `start`           | `required` | Exercise start position. | 
| `end`             | `required` | Exercise end position. | 

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
| `targetMuscleId`  | Identifier specifying the exercise side.  |
| `direction`       | Exercise direction.  |
| `Orientation`     | Exercise orientation.  |
| `Instruction`     | Exercise instructions.  |
| `start`           | Exercise start position. | 
| `end`             | Exercise end position. | 

**Example**

```
curl --location 'http://{{base_url}}/api/v1/exercise' \
--form 'name="bench dip"' \
--form 'desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"' \
--form 'levelId="{{levelId}}"' \
--form 'targetMuscleId="{{targetMuscleId1}}"' \
--form 'targetMuscleId="{{targetMuscleId2}}"' \
--form 'direction="side"' \
--form 'orientation="portrait"' \
--form 'instruction="Lorem ipsum is placeholder text commonly used"' \
--form 'image=@"{{localPath}}"' \
--form 'start[right_knee]="150"' \
--form 'start[left_knee]="150"' \
--form 'start[right_hip]="150"' \
--form 'start[left_hip]="150"' \
--form 'start[right_elbow]="150"' \
--form 'start[left_elbow]="150"' \
--form 'end[right_knee]="150"' \
--form 'end[left_knee]="150"' \
--form 'end[right_hip]="150"' \
--form 'end[left_hip]="150"' \
--form 'end[right_elbow]="150"' \
--form 'end[left_elbow]="150"'
```

```JSON
{
  "success": true,
  "message": "Exercise data insert successful",
  "data": {
    "exercise": {
      "name": "bench dip",
      "desc": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
      "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/SyiiRCjeeiqm12CqczG5DwYJ9cbEqE2u",
      "levelId": "657e033a7744a82ac69b8e92",
      "targetMuscleId": [
        "657e033a7744a82ac69b8e9c",
        "657e033a7744a82ac69b8e9f"
      ],
      "direction": "side",
      "orientation": "portrait",
      "instruction": "Lorem ipsum is placeholder text commonly used",
      "start": {
        "right_knee": "150",
        "left_knee": "150",
        "right_hip": "150",
        "left_hip": "150",
        "right_elbow": "150",
        "left_elbow": "150"
      },
      "end": {
        "right_knee": "150",
        "left_knee": "150",
        "right_hip": "150",
        "left_hip": "150",
        "right_elbow": "150",
        "left_elbow": "150"
      },
      "_id": "657e886a72e22927cae1d00d",
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
| `direction`         | Exercise direction.  |
| `Orientation`       | Exercise orientation.  |
| `instruction`       | Exercise instructions.  |
| `start`             | Exercise start position. | 
| `end`               | Exercise end position. | 

**Example**

```
curl --location -g 'http://{{base_url}}/api/v1/exercise/657e886a72e22927cae1d00d'
```

```JSON
{
  "success": true,
  "message": "Exercise data fetch successful",
  "data": {
    "exercise": {
      "_id": "657e886a72e22927cae1d00d",
      "name": "bench dip",
      "desc": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
      "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/SyiiRCjeeiqm12CqczG5DwYJ9cbEqE2u",
      "levelId": {
        "_id": "657e033a7744a82ac69b8e92",
        "name": "easy"
      },
      "targetMuscleId": [
        {
          "_id": "657e033a7744a82ac69b8e9c",
          "name": "chest"
        },
        {
          "_id": "657e033a7744a82ac69b8e9f",
          "name": "shoulders"
        }
      ],
      "direction": "side",
      "orientation": "portrait",
      "instruction": "Lorem ipsum is placeholder text commonly used",
      "start": {
        "right_knee": "150",
        "left_knee": "150",
        "right_hip": "150",
        "left_hip": "150",
        "right_elbow": "150",
        "left_elbow": "150"
      },
      "end": {
        "right_knee": "150",
        "left_knee": "150",
        "right_hip": "150",
        "left_hip": "150",
        "right_elbow": "150",
        "left_elbow": "150"
      },
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

| Parameter         | Status     | Description                |
| :--------         | :-------   | :------------------------- |
| `name`            | `required` | Exercise name. | 
| `desc`            | `required` | Exercise description. | 
| `levelId`         | `required` | Identifier specifying the exercise level. | 
| `targetMuscleId`  | `required` | Array of identifiers specifying the target muscles. | 
| `direction`       | `required` | Exercise direction (e.g., `front` or `side`). | 
| `Orientation`     | `required` | Exercise orientation (e.g., `portrait` or `landscape`). | 
| `Instruction`     | `required` | Exercise instructions. | 
| `image`           | `required` | URL or file path for the exercise image. | 
| `start`           | `required` | Exercise start position. | 
| `end`             | `required` | Exercise end position. | 

**Response Body**

| Parameter           | Description                |
| :------------------ | :------------------------- |
| `success`           | `True` if data edit is successful, `False` otherwise.  |
| `message`           | Explanation of the outcome (success or failure details).  |
| `data`              | Container for edited exercise data.  |
| `exercise`          | Object containing exercise information.  |
| `levelId`           | Identifier specifying the exercise level.  |
| `targetMuscleId`    | Array of identifiers specifying the target muscles.  |
| `direction`       | Exercise direction.  |
| `Orientation`       | Exercise orientation.  |
| `instruction`       | Exercise instructions.  |
| `start`             | Exercise start position. | 
| `end`               | Exercise end position. | 

**Example**

```
curl --location -g --request PUT 'http://{{base_url}}/api/v1/exercise/{{exerciseId}}' \
--form 'name="bench dip"' \
--form 'desc="Bench Dip is an effective exercise for targeting the triceps and building upper body strength. It also engages the chest and shoulders."' \
--form 'levelId="{{levelId}}"' \
--form 'targetMuscleId="{{targetMuscleId1}}"' \
--form 'targetMuscleId="{{targetMuscleId2}}"' \
--form 'direction="side"' \
--form 'orientation="portrait"' \
--form 'instruction="To perform the Bench Dip, sit on the edge of a bench with your hands gripping the edge. Lower your body by bending your elbows until your upper arms are parallel to the ground. Push back up to the starting position."' \
--form 'image=@"{{localPath}}"' \
--form 'start[right_knee]="150"' \
--form 'start[left_knee]="150"' \
--form 'start[right_hip]="150"' \
--form 'start[left_hip]="150"' \
--form 'start[right_elbow]="150"' \
--form 'start[left_elbow]="150"' \
--form 'end[right_knee]="150"' \
--form 'end[left_knee]="150"' \
--form 'end[right_hip]="150"' \
--form 'end[left_hip]="150"' \
--form 'end[right_elbow]="150"' \
--form 'end[left_elbow]="150"'
```

```JSON
{
  "success": true,
  "message": "Exercise Data edit successful",
  "data": {
    "exercise": {
      "_id": "657e886a72e22927cae1d00d",
      "name": "owo",
      "desc": "Bench Dip is an effective exercise for targeting the triceps and building upper body strength. It also engages the chest and shoulders.",
      "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/SyiiRCjeeiqm12CqczG5DwYJ9cbEqE2u",
      "levelId": "657e033a7744a82ac69b8e92",
      "targetMuscleId": [
        "657e033a7744a82ac69b8e9c",
        "657e033a7744a82ac69b8e9f"
      ],
      "direction": "side",
      "orientation": "portrait",
      "instruction": "To perform the Bench Dip, sit on the edge of a bench with your hands gripping the edge. Lower your body by bending your elbows until your upper arms are parallel to the ground. Push back up to the starting position.",
      "start": {
        "right_knee": "150",
        "left_knee": "150",
        "right_hip": "150",
        "left_hip": "150",
        "right_elbow": "150",
        "left_elbow": "150"
      },
      "end": {
        "right_knee": "150",
        "left_knee": "150",
        "right_hip": "150",
        "left_hip": "150",
        "right_elbow": "150",
        "left_elbow": "150"
      },
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
curl --location 'http://{{base_url}}/api/v1/exercise/search?page=1&q=up&targetMuscle=657e033a7744a82ac69b8e9f&level=657e033a7744a82ac69b8e92&direction=side'
```

```JSON
{
  "success": true,
  "message": "Exercise data successfully found",
  "data": {
    "exercise": [
      {
        "_id": "657e34fa680cfbc894fcb50f",
        "name": "push-up",
        "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png",
        "levelId": {
          "_id": "657e033a7744a82ac69b8e92",
          "name": "easy"
        }
      }
    ],
    "count": 1,
    "pageCount": 0
  }
}
```
