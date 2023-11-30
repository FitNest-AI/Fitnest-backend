# Diet Preference

This Api will be used to provide Diet Preference Data.

## 1.Insert Diet Preference

**HTTP Request**
```
  POST api/v1/diet-pref
```

**Request Body**

| Parameter | Status      | Description       |
| :-------- | :---------- | :---------------- |
| `name`    | `Required`  | Insert the name of diet preference. |
| `desc`    | `Required`  | The description of diet preference. |


**Response**

| Parameter  | Description                |
| :--------- | :------------------------- |
| `success`  | `true` if insert data successful,`false` if insert data fails. |
| `message`  | Explanation of the outcome (success or failure details). |
| `data`     | Container for diet preference data.  |
| `dietPref` | Object containing diet preference information.  |
| `name`     | The name of diet preference.  |
| `desc`     | Containing the description of diet preference.  |
| `_id`      | Diet Preference ID. |

**Example**
```
curl --location 'http://{{baseUrl}}}}/api/v1/diet-pref' \
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

## 2.Fetch Diet Preference

**HTTP Request**
```
    GET /api/v1/diet-pref/{{id}}
```

**Parameter**

| Parameter    | Description    |
| :----------- | :------------- |
| `dietPrefId` | Insert diet preference Id to fetch the data|

**Response**

| Parameter  | Description                |
| :--------- | :------------------------- |
| `success`  | `true` if insert data successful,`false` if insert data fails. |
| `message`  | Explanation of the outcome (success or failure details). |
| `data`     | Container for diet preference data.  |
| `dietPref` | Object containing diet preference information.  |
| `_id`      | Diet Preference ID. |
| `name`     | The name of diet preference.  |
| `desc`     | Containing the description of diet preference.  |

**Example**

```
curl --location 'http://{{baseUrl}}}}/api/v1/diet-pref/665526a70a4cc0197cdb5348f'
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

## 3.Edit Diet Preference Data

**HTTP Request**

```
    PUT /api/v1/diet-pref/{{id}}
```

**Query**

| Parameter    | Description    |
| :----------- | :------------- |
| `dietPrefId` | Insert diet preference Id to edit the data|

**Request Body**

| Parameter | Status      | Description       |
| :-------- | :---------- | :---------------- |
| `name`    | `Optional`  | Insert the name of diet preference. |
| `desc`    | `Optional`  | Insert the new description of diet preference. |

**Response**

| Parameter  | Description                |
| :--------- | :------------------------- |
| `success`  | `true` if edit data successful,`false` if edit data fails. |
| `message`  | Explanation of the outcome (success or failure details). |
| `data`     | Container for diet preference data.  |
| `dietPref` | Object containing diet preference information.  |
| `_id`      | Diet Preference ID. |
| `name`     | The name of diet preference.  |
| `desc`     | Containing the description of diet preference.  |

**Example**

```
curl --location --request PUT 'http://{{baseUrl}}}}/api/v1/diet-pref/6566c9fc8b19eeb3258352c0' \
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

## 4.Fetch All Diet Preference Data

**HTTP Request**

```
    GET /api/v1/diet-pref/all
```

**Response**

| Parameter  | Description                |
| :--------- | :------------------------- |
| `success`  | `true` if fetch data successful,`false` if fetch data fails. |
| `message`  | Explanation of the outcome (success or failure details). |
| `data`     | Container for diet preference data.  |
| `dietPref` | Array containing diet preference information.  |
| `_id`      | Diet Preference ID. |
| `name`     | The name of diet preference.  |
| `desc`     | Containing the description of diet preference.  |
| `count`    | Total count of diet Preference fetched. |

**Example**

```
curl --location 'http://{{baseUrl}}}}/api/v1/diet-pref/all'
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

## 5.Delete Data Preference Data

**HTTP Request**

```
    DELETE  api/v1/diet-pref/{{dietPrefId}}
```

**Query**

| Parameter    | Description    |
| :----------- | :------------- |
| `dietPrefId` | Insert diet preference Id to delete the data|

**Response**

| Parameter | Description                |
| :-------- | :------------------------- |
| `success` | `true` if delete data successful,`false` if delete data fails. |
| `message` | Explanation of the outcome (success or failure details).  |


**Example**

```
curl --location --request DELETE 'http://{{baseUrl}}}}/api/v1/diet-pref/6566c9fc8b19eeb3258352c0'
```

```JSON
    {
    "success": true,
    "message": "Diet pref data delete successful"
    }
```
