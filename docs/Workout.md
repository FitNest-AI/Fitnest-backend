# Workout

This Api will be used to provide workout data.

## 1. Insert Workout Data

**HTTP Request**

```
    POST /api/v1/user/workout
```

**HTTP Headers**

| Parameter       | Description                                      |
| :-------------- | :----------------------------------------------- |
| `Authorization` | User authentication token for API authorization. |

**Request Body**

| Parameter    | Status     | Description                                                 |
| :----------- | :--------- | :---------------------------------------------------------- |
| `name`       | `Required` | The name of the workout.                                    |
| `desc`       | `Required` | The description of the workout.                             |
| `rest`       | `Required` | Rest time between each set.                                 |
| `day`        | `Required` | Reminder to exercise by day.                                |
| `time`       | `Required` | Reminder to exercise by time.                               |
| `moveset`    | `Required` | Array Containing moveset information.                       |
| `set`        | `Required` | A set of reps performed consecutively without a rest break. |
| `rep`        | `Required` | The number of times the movement is performed in one set.   |
| `exerciseId` | `Required` | Exercise identifier.                                        |

**Response**

| Parameter    | Description                                                     |
| :----------- | :-------------------------------------------------------------- |
| `success`    | `true` if insert data successful, `false` if insert data fails. |
| `message`    | Explanation of the outcome (success or failure details).        |
| `data`       | Container for Workout data.                                     |
| `workout`    | Object containing workout information.                          |
| `name`       | The name of the workout.                                        |
| `desc`       | The description of the workout.                                 |
| `day`        | Reminder to exercise by day.                                    |
| `time`       | Reminder to exercise by time.                                   |
| `rest`       | Rest time between each set.                                     |
| `moveset`    | Array Containing moveset information.                           |
| `set`        | A set of reps performed consecutively without a rest break.     |
| `rep`        | The number of times the movement is performed in one set.       |
| `exerciseId` | Exercise identifier.                                            |
| `userId`     | User identifier.                                                |
| `_id`        | Workout identifier.                                             |

**Example**

```
curl --location 'http://localhost:3000/api/v1/user/workout' \
--data '{
  "name": "Latihan Sederhana",
  "desc": "Latihan ini memiliki gerakan yang sederhana untuk merenggangkan otot otot",
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
      "name": "Latihan Sederhana",
      "desc": "Latihan ini memiliki gerakan yang sederhana untuk merenggangkan otot otot",
      "day": "sunday",
      "time": "05:30",
      "rest": 60,
      "moveset": [
        {
          "set": 2,
          "rep": 10,
          "exerciseId": "657e34fa680cfbc894fcb50f"
        },
        {
          "set": 1,
          "rep": 20,
          "exerciseId": "657e34fa680cfbc894fcb50e"
        }
      ],
      "userId": "657e7b1bd8d396dd896e840e",
      "_id": "657e90068778e5a0ce66c9f1"
    }
  }
}
```

## 2. Fetch Workout Data

**HTTP Request**

```
    GET /api/v1/user/workout/{{workoutId}}
```

**params**

| Parameter   | Status     | Description        |
| :---------- | :--------- | :----------------- |
| `workoutId` | `required` | workout identifier |

**HTTP Headers**

| Parameter       | Description                                      |
| :-------------- | :----------------------------------------------- |
| `Authorization` | User authentication token for API authorization. |

**Response Body**

| Parameter    | Description                                                      |
| :----------- | :--------------------------------------------------------------- |
| `success`    | `true` if data fetch is successful, `false` if data fetch fails. |
| `message`    | Explanation of the outcome (success or failure details).         |
| `data`       | Container for Workout data.                                      |
| `workout`    | Object containing workout information.                           |
| `_id`        | Workout identifier.                                              |
| `name`       | The name of the workout.                                         |
| `desc`       | The description of the workout.                                  |
| `day`        | Reminder to exercise by day.                                     |
| `time`       | Reminder to exercise by time.                                    |
| `rest`       | Rest time between each set.                                      |
| `moveset`    | Array containing moveset information.                            |
| `set`        | A set of reps performed consecutively without a rest break.      |
| `rep`        | The number of times the movement is performed in one set.        |
| `exerciseId` | Exercise identifier.                                             |
| `name`       | The name of the exercise.                                        |
| `desc`       | The description of the exercise.                                 |
| `image`      | URL to the image illustrating the exercise.                      |
| `levelId`    | Object containing level information.                             |
| `_id`        | Level identifier.                                                |
| `name`       | The name of the level.                                           |
| `start`      | Starting position parameters for the exercise.                   |
| `end`        | Ending position parameters for the exercise.                     |

**Example**

```
curl --location -g 'http://localhost:3000/api/v1/user/workout/{{workoutId}}'
```

```JSON
{
  "success": true,
  "message": "Workout data fetch successful",
  "data": {
    "workout": {
      "_id": "657e90068778e5a0ce66c9f1",
      "name": "Latihan Sederhana",
      "desc": "Latihan ini memiliki gerkanyang sederhana untuk merenggangkan otot otot",
      "day": "sunday",
      "time": "05:30",
      "rest": 60,
      "moveset": [
        {
          "set": 2,
          "rep": 10,
          "exerciseId": {
            "_id": "657e34fa680cfbc894fcb50f",
            "name": "push-up",
            "desc": "Push-up is a compound exercise that targets the chest, shoulders, and triceps. It also engages the core for stability.",
            "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png",
            "targetMuscleId": [
              {
                "_id": "657e033a7744a82ac69b8e9c",
                "name": "chest"
              },
              {
                "_id": "657e033a7744a82ac69b8e9f",
                "name": "shoulders"
              },
              {
                "_id": "657e033a7744a82ac69b8e9a",
                "name": "triceps"
              }
            ],
            "direction": "side",
            "orientation": "landscape",
            "instruction": "Start in a plank position with your hands placed slightly wider than shoulder-width apart. Lower your body by bending your elbows, keeping your body in a straight line. Push back up to the starting position.",
            "start": {
              "right_knee": 10,
              "left_knee": 10,
              "right_hip": 10,
              "left_hip": 10,
              "right_elbow": 350,
              "left_elbow": 350
            },
            "end": {
              "right_knee": 15,
              "left_knee": 15,
              "right_hip": 10,
              "left_hip": 10,
              "right_elbow": 250,
              "left_elbow": 250
            }
          }
        },
        {
          "set": 1,
          "rep": 20,
          "exerciseId": {
            "_id": "657e34fa680cfbc894fcb50e",
            "name": "squat",
            "desc": "Squat is a fundamental lower body exercise that targets the quadriceps, hamstrings, and glutes. It also engages the core muscles for stability.",
            "image": "https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png",
            "targetMuscleId": [
              {
                "_id": "657e033a7744a82ac69b8ea1",
                "name": "hamstrings"
              },
              {
                "_id": "657e033a7744a82ac69b8e9b",
                "name": "glutes"
              },
              {
                "_id": "657e08b3b985a016868c769f",
                "name": "Quadriceps"
              }
            ],
            "direction": "side",
            "orientation": "portrait",
            "instruction": "Stand with your feet shoulder-width apart. Lower your body by bending your knees and hips, as if sitting back into a chair. Keep your back straight and chest up. Rise back up to the starting position.",
            "start": {
              "right_knee": 0,
              "left_knee": 0,
              "right_hip": 130,
              "left_hip": 130,
              "right_elbow": 360,
              "left_elbow": 360
            },
            "end": {
              "right_knee": 90,
              "left_knee": 90,
              "right_hip": 50,
              "left_hip": 50,
              "right_elbow": 360,
              "left_elbow": 360
            }
          }
        }
      ]
    }
  }
}

```

## 3. Edit Workout Data

**HTTP Request**

```
    PUT /api/v1/user/workout/{{workoutId}}
```

**params**

| Parameter   | Status     | Description        |
| :---------- | :--------- | :----------------- |
| `workoutId` | `required` | workout identifier |

**HTTP Headers**

| Parameter       | Description                                      |
| :-------------- | :----------------------------------------------- |
| `Authorization` | User authentication token for API authorization. |

**Request Body**

| Parameter | Status     | Description                     |
| :-------- | :--------- | :------------------------------ |
| `name`    | `Required` | The name of the workout.        |
| `desc`    | `Required` | The description of the workout. |
| `rest`    | `Required` | Rest time between each set.     |

**Response Body**

| Parameter    | Description                                                          |
| :----------- | :------------------------------------------------------------------- |
| `success`    | `true` if data edit is successful, `false` if the edit fails.        |
| `message`    | Explanation of the outcome (success or failure details).             |
| `data`       | Container for edited Workout data.                                   |
| `workout`    | Object containing edited workout information.                        |
| `_id`        | Workout identifier.                                                  |
| `name`       | The edited name of the workout.                                      |
| `desc`       | The edited description of the workout.                               |
| `day`        | The edited reminder to exercise by day.                              |
| `time`       | The edited reminder to exercise by time.                             |
| `rest`       | The edited rest time between each set.                               |
| `moveset`    | Array containing edited moveset information.                         |
| `set`        | The edited set of reps performed consecutively without a rest break. |
| `rep`        | The edited number of times the movement is performed in one set.     |
| `exerciseId` | The edited exercise identifier.                                      |
| `userId`     | The identifier of the user associated with the workout.              |
| `createdAt`  | Timestamp indicating when the workout was created.                   |
| `updatedAt`  | Timestamp indicating when the workout was last updated.              |

**Example**

```
curl --location -g --request PUT 'http://localhost:3000/api/v1/user/workout/{{workoutId}}' \
--data-urlencode 'name=latihan goku' \
--data-urlencode 'desc=latihan di ruangan dengan tekanan gravitasi tinggi' \
--data-urlencode 'rest=15'
```

```JSON
{
  "success": true,
  "message": "Workout data edit successful",
  "data": {
    "workout": {
      "_id": "657e21c7483e3fd413fda67c",
      "name": "latihan jadi goku",
      "desc": "latihan dengan tekanan gravitasi tinggi",
      "day": "monday",
      "time": "05:30",
      "rest": 15,
      "moveset": [
        {
          "set": 2,
          "rep": 10,
          "exerciseId": "657e0b96d9f7222a44045e36"
        },
        {
          "set": 1,
          "rep": 20,
          "exerciseId": "657e0b96d9f7222a44045e37"
        }
      ],
      "userId": "657e1ec6ff172371414daea2",
      "createdAt": "2023-12-16T22:16:39.035Z",
      "updatedAt": "2023-12-16T22:17:41.054Z",
      "__v": 0
    }
  }
}
```

## 4. Fetch All Workout Data

**HTTP Request**

```
    GET /api/v1/user/workout/all
```

**HTTP Headers**

| Parameter       | Description                                      |
| :-------------- | :----------------------------------------------- |
| `Authorization` | User authentication token for API authorization. |

**Response Body**

| Parameter | Description                                                   |
| :-------- | :------------------------------------------------------------ |
| `success` | `true` if data fetch successful, `false` if data fetch fails. |
| `message` | Explanation of the outcome (success or failure details).      |
| `data`    | Container for Workout data.                                   |
| `workout` | Object containing workout information.                        |
| `_id`     | Workout identifier.                                           |
| `name`    | The name of the workout.                                      |
| `desc`    | The description of the workout.                               |
| `day`     | Reminder to exercise by day.                                  |
| `time`    | Reminder to exercise by time.                                 |
| `rest`    | Rest time between each set.                                   |
| `moveset` | Total count of moveset.                                       |
| `count`   | Total count of workout fetched.                               |

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
        "_id": "657e2378d68a3f8812200f9f",
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

## 5. Delete Workout Data

**HTTP Request**

```
    DELETE /api/v1/user/workout/{{workoutId}}
```

**params**

| Parameter   | Status     | Description        |
| :---------- | :--------- | :----------------- |
| `workoutId` | `required` | workout identifier |

**Http Headers**

| Parameter       | Description                                      |
| :-------------- | :----------------------------------------------- |
| `Authorization` | User authentication token for API authorization. |

**Response Body**

| Parameter | Description                                                   |
| :-------- | :------------------------------------------------------------ |
| `success` | `true` if delete data successful,`false` if delete data fails |
| `message` | Explanation of the outcome (success or failure details).      |

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

## 6. Insert Moveset In Workout 

**HTTP Request**

```
    POST /api/v1/user/workout/{{workoutId}}/moveset
```

**params**

| Parameter   | Status     | Description        |
| :---------- | :--------- | :----------------- |
| `workoutId` | `required` | workout identifier |

**Http Headers**

| Parameter       | Description                                      |
| :-------------- | :----------------------------------------------- |
| `Authorization` | User authentication token for API authorization. |

**Request Body**

| Parameter    | Status     | Description                                                 |
| :----------- | :--------- | :---------------------------------------------------------- |
| `set`        | `Required` | A set of reps performed consecutively without a rest break. |
| `rep`        | `Required` | The number of times the movement is performed in one set.   |
| `exerciseId` | `Required` | Exercise identifier.                                        |

**Response Body**

| Parameter    | Description                                                     |
| :----------- | :-------------------------------------------------------------- |
| `success`    | `true` if data insert successful, `false` if data insert fails. |
| `message`    | Explanation of the outcome (success or failure details).        |
| `workout`    | Object containing workout information.                          |
| `_id`        | Workout identifier.                                             |
| `name`       | The name of the workout.                                        |
| `desc`       | The description of the workout.                                 |
| `day`        | Reminder to exercise by day.                                    |
| `time`       | Reminder to exercise by time.                                   |
| `rest`       | Rest time between each set.                                     |
| `moveset`    | Array Containing moveset information.                           |
| `set`        | A set of reps performed consecutively without a rest break.     |
| `rep`        | The number of times the movement is performed in one set.       |
| `exerciseId` | Object containing exercise information.                         |
| `_id`        | Exercise identifier.                                            |
| `userId`     | User identifier.                                                |
| `createdAt`  | Time when created.                                              |
| `updatedAt`  | Time when updated.                                              |

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
  "data": {
    "workout": {
      "_id": "657e21c7483e3fd413fda67c",
      "name": "latihan jadi goku",
      "desc": "latihan dengan tekanan gravitasi tinggi",
      "day": "monday",
      "time": "05:30",
      "rest": 15,
      "moveset": [
        {
          "set": 2,
          "rep": 10,
          "exerciseId": "657e0b96d9f7222a44045e36"
        },
        {
          "set": 1,
          "rep": 20,
          "exerciseId": "657e0b96d9f7222a44045e37"
        },
        {
          "set": 3,
          "rep": 10,
          "exerciseId": "657e0b96d9f7222a44045e36"
        }
      ],
      "userId": "657e1ec6ff172371414daea2",
      "createdAt": "2023-12-16T22:16:39.035Z",
      "updatedAt": "2023-12-16T22:17:54.748Z",
      "__v": 0
    }
  }
}
```

## 7. Delete Moveset In Workout Data

**HTTP Request**

```
    DELETE /api/v1/user/workout/{{workoutId}}/moveset/{{movesetId}}
```

**params**

| Parameter   | Status     | Description        |
| :---------- | :--------- | :----------------- |
| `workoutId` | `required` | workout identifier |
| `movesetId` | `required` | moveset identifier |

**Http Headers**

| Parameter       | Description                                      |
| :-------------- | :----------------------------------------------- |
| `Authorization` | User authentication token for API authorization. |

**Response Body**

| Parameter    | Description                                                     |
| :----------- | :-------------------------------------------------------------- |
| `success`    | `true` if delete data successful, `false` if delete data fails. |
| `message`    | Explanation of the outcome (success or failure details).        |
| `workout`    | Object containing workout information.                          |
| `_id`        | Workout identifier.                                             |
| `name`       | The name of the workout.                                        |
| `desc`       | The description of the workout.                                 |
| `day`        | Reminder to exercise by day.                                    |
| `time`       | Reminder to exercise by time.                                   |
| `rest`       | Rest time between each set.                                     |
| `moveset`    | Array Containing moveset information.                           |
| `set`        | A set of reps performed consecutively without a rest break.     |
| `rep`        | The number of times the movement is performed in one set.       |
| `exerciseId` | Object containing exercise information.                         |
| `_id`        | Exercise identifier.                                            |
| `userId`     | User identifier.                                                |
| `createdAt`  | Time when created.                                              |
| `updatedAt`  | Time when updated.                                              |

**Example**

```
curl --location -g --request DELETE 'http://localhost:3000/api/v1/user/workout/6566e2a28b19eeb32583531d/moveset/6566e6228b19eeb32583533b'
```

```JSON
{
  "success": true,
  "message": "moveset data delete successful",
  "workout": {
    "_id": "657e21c7483e3fd413fda67c",
    "name": "latihan jadi goku",
    "desc": "latihan dengan tekanan gravitasi tinggi",
    "day": "monday",
    "time": "05:30",
    "rest": 15,
    "moveset": [
      {
        "set": 1,
        "rep": 20,
        "exerciseId": "657e0b96d9f7222a44045e37"
      }
    ],
    "userId": "657e1ec6ff172371414daea2",
    "createdAt": "2023-12-16T22:16:39.035Z",
    "updatedAt": "2023-12-16T22:18:13.845Z",
    "__v": 0
  }
}
```
