# Diet Preference

This Api will be used to authenticate new user

## 1.insertDietPrefData

**HTTP Request**
```
  POST api/v1/diet-pref
```

**Request Body**

| Parameter   | Description                |
| :---------- | :------------------------- |
| `name`      |    |
| `desc`      |    |


**Response**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `success`         |   |
| `message`         |   |
| `data`            |   |
| `dietPref`        |   |
| `name`            |   |
| `desc`            |   |
| `_id`             |   |
| `__v`             |   |


**Example**
```
curl --location 'http://localhost:3000/api/v1/diet-pref' \
--data '{
  "name": "Omnivora",
  "desc": "eat everything"
}'
```

```JSON
    {
     "success": true,
     "message": "Diet pref data insert successful",
     "data": {
        "dietPref": {
            "name": "Omnivora",
            "desc": "eat everything",
            "_id": "6566c9fc8b19eeb3258352c0",
            "__v": 0
        }
     }
    }
```

## 2.fetchDietPrefDataByID

**HTTP Request**
```
    GET /api/v1/diet-pref/{{id}}
```

**Parameter**

| Parameter | Status   | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | ``       |  |

**Response**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `success`         |   |
| `message`         |   |
| `data`            |   |
| `dietPref`        |   |
| `_id`             |   |
| `name`            |   |
| `desc`            |   |
| `__v`             |   |


**Example**

```
curl --location 'http://localhost:3000/api/v1/diet-pref/665526a70a4cc0197cdb5348f'
```

```JSON
    {
     "success": true,
     "message": "Diet pref data fetch successful",
     "data": {
        "dietPref": {
            "_id": "65526a70a4cc0197cdb5348f",
            "name": "flexitarian",
            "desc": "Consumes all types of food, including meat, fish, animal products, and plant-based foods",
            "__v": 0
        }
     }
    }
```

## 3.editLevelDataById

**HTTP Request**

```
    PUT /api/v1/diet-pref/{{id}}
```

**Parameter**

| Parameter | Status   | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | ``       |  |

**Request Body**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `name`            |   |
| `desc`            |   |

**Response**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `success`         |   |
| `message`         |   |
| `data`            |   |
| `dietPref`        |   |
| `_id`             |   |
| `name`            |   |
| `desc`            |   |
| `__v`             |   |


**Example**

```
curl --location --request PUT 'http://localhost:3000/api/v1/diet-pref/6566c9fc8b19eeb3258352c0' \
--data '{
  "name": "karnivora",
  "desc": "eat daging"
}'
```

```JSON
    {
     "success": true,
     "message": "Diet pref data edit successful",
     "data": {
        "dietPref": {
            "_id": "6566c9fc8b19eeb3258352c0",
            "name": "karnivora",
            "desc": "eat daging",
            "__v": 0
        }
     }
    }
```

## 4.fetchAllDietPrefData

**HTTP Request**

```
    GET /api/v1/diet-pref/all
```

**Response**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `success`         |   |
| `message`         |   |
| `data`            |   |
| `dietPref`        |   |
| `_id`             |   |
| `name`            |   |
| `desc`            |   |
| `__v`             |   |
| `count`           |   |

**Example**

```
curl --location 'http://localhost:3000/api/v1/diet-pref/all'
```

```JSON
    {
     "success": true,
     "message": "fetch all diet pref data success",
     "data": {
        "dietPref": [
            {
                "_id": "65526a70a4cc0197cdb5348f",
                "name": "flexitarian",
                "desc": "Consumes all types of food, including meat, fish, animal products, and plant-based foods",
                "__v": 0
            },
            {
                "_id": "65526a70a4cc0197cdb53490",
                "name": "vegan",
                "desc": "Does not consume animal products, including meat, dairy, eggs, and other animal-derived products",
                "__v": 0
            },
            {
                "_id": "65526a70a4cc0197cdb53491",
                "name": "vegetarian",
                "desc": "Does not consume meat but may include non-meat animal products such as dairy or eggs in their diet",
                "__v": 0
            },
            {
                "_id": "65526a70a4cc0197cdb53492",
                "name": "pescetarian",
                "desc": "Avoids meat except for fish and fish products",
                "__v": 0
            },
            {
                "_id": "6566c9fc8b19eeb3258352c0",
                "name": "karnivora",
                "desc": "eat daging",
                "__v": 0
            }
        ],
        "count": 5
     }
    }
```

## 5.deleteDietPrefDataById

**HTTP Request**

```
    DELETE  api/v1/diet-pref/{{dietPrefId}}
```

**Parameter**

| Parameter | Status   | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | ``       |  |

**Response**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `success`         |   |
| `message`         |   |


**Example**

```
curl --location --request DELETE 'http://localhost:3000/api/v1/diet-pref/6566c9fc8b19eeb3258352c0'
```

```JSON
    {
    "success": true,
    "message": "Diet pref data delete successful"
    }
```

