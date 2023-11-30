# Target Muscle

This Api will be used to provide Diet Preference Data.

## 1.Insert Target Muscle

**HTTP Request**

```
    POST /api/v1/target-muscle
```

**Request Body**

| Parameter | Status      | Description       |
| :-------- | :---------- | :---------------- |
| `name`    | `Required`  | Insert the name of Target Muscle. |


**Response**

| Parameter      | Description                |
| :------------- | :------------------------- |
| `success`      | `true` if insert data successful,`false` if insert data fails. |
| `message`      | Explanation of the outcome (success or failure details). |
| `data`         | Container for target muscle data  |
| `targetMuscle` | Object containing target muscle information.  |
| `_id`          | Target Muscle ID |
| `name`         | The name of target muscle.  |

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

## 2.Fetch Target Muscle Data

**HTTP Request**

```
    GET /api/v1/target-muscle/{{targetMuscleId}}
```

**Query**

| Parameter        | Description    |
| :--------------- | :------------- |
| `targetMuscleId` | Insert Target Muscle Id to fetch the data. |


**Response**

| Parameter      | Description                |
| :------------- | :------------------------- |
| `success`      | `true` if data fetch successful,`false` if data fetch fails.|
| `message`      | Explanation of the outcome (success or failure details). |
| `data`         | Container for target muscle data. |
| `targetMuscle` | Object containing target muscle information. |
| `_id`          | Target Muscle ID. |
| `name`         | The name of target muscle.  |

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

## 3.Edit Target Muscle Data

**HTTP Request**

```
    PUT /api/v1/target-muscle/{{targetMuscleId}}
```

**Query**

| Parameter        | Description    |
| :--------------- | :------------- |
| `targetMuscleId` | Insert Target Muscle Id to edit the data. |


**Request Body**

| Parameter | Status      | Description       |
| :-------- | :---------- | :---------------- |
| `name`    | `Required`  | Insert the new name of Target Muscle. |
**Response**

| Parameter      | Description                |
| :------------- | :------------------------- |
| `success`      | `true` if data edit successful,`false` if data edit fails. |
| `message`      | Explanation of the outcome (success or failure details). |
| `data`         | Container for target muscle data. |
| `targetMuscle` | Object containing target muscle information. |
| `_id`          | Target Muscle ID. |
| `name`         | The name of target muscle.  |

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

## 4.Fetch All Target Muscle Data

**HTTP Request**

```
    GET /api/v1/target-muscle/all
```

**Response**

| Parameter      | Description                |
| :------------- | :------------------------- |
| `success`      | `true` if data fetch successful,`false` if data fetch fails. |
| `message`      | Explanation of the outcome (success or failure details). |
| `data`         | Container for target muscle data. |
| `targetMuscle` | Array containing target muscle information. |
| `_id`          | Target Muscle ID. |
| `name`         | The name of target muscle.  |
| `count`        | Total count of target muscle fetched. |

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

## 5.Delete Target Muscle Data

**HTTP Request**

```
    DELETE /api/v1/target-muscle/{{targetMuscleId}}
```

**Query**

| Parameter        | Description    |
| :--------------- | :------------- |
| `targetMuscleId` | Insert Target Muscle Id to delete the data. |

**Response**

| Parameter | Description                |
| :-------- | :------------------------- |
| `success` | `true` if delete data successful,`false` if delete data fails. |
| `message` | Explanation of the outcome (success or failure details).  |

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
