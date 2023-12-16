# Workout

This Api For Workout

## 1. Insert Workout Data When Login

**HTTP Request**

```
    POST /api/v1/user/workout
```

**Request Body**

| Parameter    | Status     | Description                |
| :----------- | :--------- | :------------------------- |
| `name`       | `Required` | The name of the workout.    |
| `desc`       | `Required` | The description of the workout. |
| `rest`       | `Required` | Rest time between each set.     |
| `day`        | `Required` | Reminder to exercise by day.    |
| `time`       | `Required` | Reminder to exercise by time.   |
| `moveset`    | `Required` | Array Containing moveset information. |
| `set`        | `Required` | A set of reps performed consecutively without a rest break. |
| `rep`        | `Required` |The number of times the movement is performed in one set.  |
| `Id`         | `Required` | Exercise identifier.     |

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    | `true` if insert data sucessful, `false` if insert data fails. |
| `message`    | Explanation of the outcome (success or failure details). |
| `data`       | Container for Workout data.  |
| `workout`    | Object containing workout information.  |
| `name`       | The name of the workout.  |
| `desc`       | The description of the workout.  |
| `day`        | Reminder to exercise by day.  |
| `time`       | Reminder to exercise by time.  |
| `rest`       | Rest time between each set.  |
| `moveset`    | Array Containing moveset information.  |
| `set`        | A set of reps performed consecutively without a rest break. |
| `rep`        | The number of times the movement is performed in one set.  |
| `exerciseId` | Exercise identifier. |
 `_id`         | Moveset Identifier. |
| `userId`     | User identifier. |
| `_id`        | Workout identifier. |

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

## 2. Fetch Workout Data When Login

**HTTP Request**

```
    GET /api/v1/user/workout/{{workoutId}}
```

**Query**

| Parameter   | Description                |
| :---------- | :------------------------- |
| `workoutId` | Insert Workout ID to fetch the data. |

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    | `true` if data fetch sucessful, `false` if data fetch fails. |
| `message`    | Explanation of the outcome (success or failure details).  |
| `data`       | Container for Workout data.  |
| `workout`    | Object containing workout information.  |
| `_id`        | Workout identifier.  |
| `name`       | The name of the workout.  |
| `desc`       | The description of the workout.  |
| `day`        | Reminder to exercise by day.  |
| `time`       | Reminder to exercise by time.  |
| `rest`       | Rest time between each set.  |
| `moveset`    | Array Containing moveset information.  |
| `set`        | A set of reps performed consecutively without a rest break. |
| `rep`        | The number of times the movement is performed in one set.  |
| `exerciseId` | Object containing exercise information.  |
| `_id`        | Exercise identifier.  |
| `name`       | The name of exercise.  |
| `desc`       | The description of the exercise.  |
| `levelId`    | Object containing level information.  |
| `_id`        | Level identifier.  |
| `name`       | The name of level.  |
| `_id`        | Moveset identifier.  |



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

## 3. Edit Workout Data By Id When Login

**HTTP Request**

```
    PUT /api/v1/user/workout/{{workoutId}}
```

**Query**

| Parameter   | Description        |
| :---------- | :----------------- |
| `_id`       | Workout identifier |

**Request Body**

| Parameter    | Status     | Description                |
| :----------- | :--------- | :------------------------- |
| `name`       | `Required` | The name of the workout.    |
| `desc`       | `Required` | The description of the workout. |
| `rest`       | `Required` | Rest time between each set.     |

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

## 4. Fetch All Workout Data

**HTTP Request**

```
    GET /api/v1/user/workout/all
```

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    | `true` if data fetch sucessful, `false` if data fetch fails. |
| `message`    | Explanation of the outcome (success or failure details).  |
| `data`       | Container for Workout data.  |
| `workout`    | Object containing workout information.  |
| `_id`        | Workout identifier.  |
| `name`       | The name of the workout.  |
| `desc`       | The description of the workout.  |
| `day`        | Reminder to exercise by day.  |
| `time`       | Reminder to exercise by time.  |
| `rest`       | Rest time between each set.  |
| `moveset`    | Total count of moveset. |
| `count`      | Total count of workout fetched. |

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

## 5. Delete Workout Data By Id When Login

**HTTP Request**

```
    DELETE /api/v1/user/workout/{{workoutId}}
```

**Query**

| Parameter   | Description        |
| :---------- | :----------------- |
| `_id`       | Workout Identifier |

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    | `true` if delete data successful,`false` if delete data fails |
| `message`    | Explanation of the outcome (success or failure details).  |

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

## 6. Insert Moveset In Workout When Login

**HTTP Request**

```
    POST /api/v1/user/workout/{{workoutId}}/moveset
```

**Query**

| Parameter   | Description         |
| :---------- | :------------------ |
| `_id`       | Workout identifier. |

**Request Body**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `rep`        |   |
| `set`        |   |
| `exerciseId` |  Exercise identifier. |


**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    | `true` if data insert sucessful, `false` if data insert fails. |
| `message`    | Explanation of the outcome (success or failure details).  |
| `workout`    | Object containing workout information.  |
| `_id`        | Workout identifier.  |
| `name`       | The name of the workout.  |
| `desc`       | The description of the workout.  |
| `day`        | Reminder to exercise by day.  |
| `time`       | Reminder to exercise by time.  |
| `rest`       | Rest time between each set.  |
| `moveset`    | Array Containing moveset information.  |
| `set`        | A set of reps performed consecutively without a rest break. |
| `rep`        | The number of times the movement is performed in one set.  |
| `exerciseId` | Object containing exercise information.  |
| `_id`        | Exercise identifier.  |
| `userId`     | User identifier.  |
| `createdAt`  | Time when created. |
| `updatedAt`  | Time when updated. |

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

## 7. Delete Moveset In Workout Data By Id When Login

**HTTP Request**

```
    DELETE /api/v1/user/workout/{{workoutId}}/moveset/{{movesetId}}
```

**Query**

| Parameter   | Description        |
| :---------- | :----------------- |
| `workoutId` | Workout identifier. |
| `movesetId` | Moveset identifier. |

**Response**

| Parameter    | Description                |
| :----------- | :------------------------- |
| `success`    | `true` if delete data sucessful, `false` if delete data fails. |
| `message`    | Explanation of the outcome (success or failure details).  |
| `workout`    | Object containing workout information.  |
| `_id`        | Workout identifier.  |
| `name`       | The name of the workout.  |
| `desc`       | The description of the workout.  |
| `day`        | Reminder to exercise by day.  |
| `time`       | Reminder to exercise by time.  |
| `rest`       | Rest time between each set.  |
| `moveset`    | Array Containing moveset information.  |
| `set`        | A set of reps performed consecutively without a rest break. |
| `rep`        | The number of times the movement is performed in one set.  |
| `exerciseId` | Object containing exercise information.  |
| `_id`        | Exercise identifier.  |
| `userId`     | User identifier.  |
| `createdAt`  | Time when created.  |
| `updatedAt`  | Time when updated. |

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
