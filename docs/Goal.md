# Goal

This Api will be used to provide Goal Data.

## 1. Fetch All Goals Data

**HTTP Request**

```
    GET /api/v1/goal/all
```

**Response**

| Parameter | Description                                                  |
| :-------- | :----------------------------------------------------------- |
| `success` | `true` if data fetch successful,`false` if data fetch fails. |
| `message` | Explanation of the outcome (success or failure details).     |
| `data`    | container for goals data.                                    |
| `goal`    | Array containing goal information.                           |
| `_id`     | Goals Id.                                                    |
| `name`    | The name of goals.                                           |
| `count`   | Total count of goals fetched.                                |

**Example**

```
curl --location 'http://{{base_url}}/api/v1/goal/all'
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

## 2.Fetch Goal Data

**HTTP Request**

```
    GET /api/v1/goal/{{goalId}}
```

**Query**

| Parameter | Description                      |
| :-------- | :------------------------------- |
| `goalId`  | Insert Goal Id to fetch the data |

**Response**

| Parameter | Description                                                  |
| :-------- | :----------------------------------------------------------- |
| `success` | `true` if data fetch successful,`false` if data fetch fails. |
| `message` | Explanation of the outcome (success or failure details).     |
| `data`    | Container for goal data.                                     |
| `goal`    | Object containing goal information.                          |
| `_id`     | Goal ID.                                                     |
| `name`    | The name of goal.                                            |

**Example**

```
curl --location -g 'http://{{base_url}}/api/v1/goal/65526a70a4cc0197cdb534a4'
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

## 3.Edit Goal Data

**HTTP Request**

```
    PUT /api/v1/goal/{{goalId}}
```

**Query**

| Parameter | Description                     |
| :-------- | :------------------------------ |
| `goalId`  | Insert Goal Id to edit the data |

**Request Body**

| Parameter | Status     | Description       |
| :-------- | :--------- | :---------------- |
| `name`    | `Optional` | New name of goal. |

**Response**

| Parameter | Description                                                |
| :-------- | :--------------------------------------------------------- |
| `success` | `true` if data edit successful,`false` if data edit fails. |
| `message` | Explanation of the outcome (success or failure details).   |
| `data`    | Container for goal data.                                   |
| `goal`    | Object containing goal information.                        |
| `_id`     | Goal ID.                                                   |
| `name`    | The name of goal.                                          |

**Example**

```
curl --location -g --request PUT 'http://{{base_url}}/api/v1/goal/65526a70a4cc0197cdb534a4' \
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

## 4.Delete Goal Data

**HTTP Request**

```
    DELETE /api/v1/goal/{{goalId}}
```

**Query**

| Parameter | Description                       |
| :-------- | :-------------------------------- |
| `goalId`  | Insert Goal Id to delete the data |

**Response**

| Parameter | Description                                                    |
| :-------- | :------------------------------------------------------------- |
| `success` | `true` if delete data successful,`false` if delete data fails. |
| `message` | Explanation of the outcome (success or failure details).       |

**Example**

```
curl --location -g --request DELETE 'http://{{base_url}}/api/v1/goal/65667ebb5baf19362c520a66'
```

```JSON
    {
     "success": true,
     "message": "Goal data delete successful"
    }
```

## 5.Insert Goal Data

**HTTP Request**

```
    POST /api/v1/goal
```

**Request Body**

| Parameter | Status     | Description       |
| :-------- | :--------- | :---------------- |
| `name`    | `Required` | New name of goal. |

**Response**

| Parameter | Description                                                    |
| :-------- | :------------------------------------------------------------- |
| `success` | `true` if insert data successful,`false` if insert data fails. |
| `message` | Explanation of the outcome (success or failure details).       |
| `data`    | Container for goal data.                                       |
| `goal`    | Object containing goal information.                            |
| `_id`     | Goal ID.                                                       |
| `name`    | The name of goal.                                              |

**Example**

```
curl --location 'http://{{base_url}}/api/v1/goal' \
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
