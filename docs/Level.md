# Level

This Api will be used to provide Level Data.

## 1.Insert Level Data

**HTTP Request**

```
    POST /api/v1/level
```

**Request Body**

| Parameter | Status      | Description       |
| :-------- | :---------- | :---------------- |
| `name`    | `Required`  | Insert the name of level. |


**Response**

| Parameter | Description                |
| :-------- | :------------------------- |
| `success` | `true` if insert data successful,`false` if insert data fails. |
| `message` | Explanation of the outcome (success or failure details). |
| `data`    | Container for level data  |
| `level`   | Object containing level information.  |
| `_id`     | Level ID |
| `name`    | The name of goal.  |

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

## 2.Fetch Level Data

**HTTP Request** 

```
    GET /api/v1/level/{{levelId}}
```

**Query**

| Parameter | Description    |
| :-------- | :------------- |
| `levelId`  | Insert level Id to fetch the data. |

**Response**

| Parameter | Description                |
| :-------- | :------------------------- |
| `success` | `true` if data fetch successful,`false` if data fetch fails.|
| `message` | Explanation of the outcome (success or failure details). |
| `data`    | Container for level data. |
| `level`   | Object containing level information. |
| `_id`     | Level ID. |
| `name`    | The name of level.  |

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

## 3.Edit Level Data

**HTTP Request**

```
    PUT /api/v1/level/{{levelId}}
```

**Query**

| Parameter | Description    |
| :-------- | :------------- |
| `levelId`  | Insert level Id to edit the data. |

**Request Body**

| Parameter | Status      | Description       |
| :-------- | :---------- | :---------------- |
| `name`    | `Required`  | New name of level. |


**Response**

| Parameter | Description                |
| :-------- | :------------------------- |
| `success` | `true` if data edit successful,`false` if data edit fails. |
| `message` | Explanation of the outcome (success or failure details). |
| `data`    | Container for level data. |
| `level`   | Object containing level information. |
| `_id`     | Level ID. |
| `name`    | The name of level.  |

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

## 4.Fetch All Level Data

**HTTP Request**

```
    GET /api/v1/level/all
```

**Response**

| Parameter | Description                |
| :-------- | :------------------------- |
| `success` | `true` if data fetch successful,`false` if data fetch fails. |
| `message` | Explanation of the outcome (success or failure details). |
| `data`    | container for level data. |
| `level`   | Array containing level information.  |
| `_id`     | Level Id. |
| `name`    | The name of level. |
| `count`   | Total count of lavel fetched. |

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

## 5.Delete Level Data

**HTTP Request**

```
    DELETE /api/v1/level/{{levelId}}
```

**Query**

| Parameter | Description    |
| :-------- | :------------- |
| `levelId`  | Insert level Id to delete the data. |

**Response**

| Parameter | Description                |
| :-------- | :------------------------- |
| `success` | `true` if delete data successful,`false` if delete data fails. |
| `message` | Explanation of the outcome (success or failure details).  |

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
