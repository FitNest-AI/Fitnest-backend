# Profile

This Api for profile

## 1.Insert User Profile

**_Note_**

```
AllUserAuthenticate
```

**HTTP Request**

```
    POST /api/v1/user/profile
```

**HTTP Headers**

| Parameter       | Description                                      |
| :-------------- | :----------------------------------------------- |
| `Authorization` | User authentication token for API authorization. |

**Request Body**

| Parameter        | Status             | Description                                           |
| :--------------- | :----------------- | :---------------------------------------------------- |
| `firstname`      | `optional`         | User's first name.                                    |
| `lastname`       | `optional`         | User's last name.                                     |
| `gender`         | `optional`         | User's gender. `man` or `woman`.                      |
| `dateOfBirth`    | `optional`         | User's date of birth (format: YYYY-MM-DD).            |
| `height`         | `optional`         | User's height (in cm) - `Min: 50`, `Max: 280`.        |
| `Weight`         | `optional`         | User's weight (in kg) - `Min: 10`, `Max: 600`.        |
| `goalId`         | `optional` `array` | Array of goal identifiers.                            |
| `levelId`        | `optional`         | Identifier specifying the user's fitness level.       |
| `targetMuscleId` | `optional` `array` | Array of target muscle identifiers.                   |
| `dietPrefId`     | `optional`         | Identifier specifying the user's dietary preferences. |

**Response Body**

| Parameter        | Description                                              |
| :--------------- | :------------------------------------------------------- |
| `success`        | `True` if data insert is successful, `False` otherwise.  |
| `message`        | Explanation of the outcome (success or failure details). |
| `data`           | Container for user profile data.                         |
| `profile`        | Object containing user profile information.              |
| `firstname`      | User's first name.                                       |
| `lastname`       | User's last name.                                        |
| `gender`         | User's gender.                                           |
| `dateOfBirth`    | User's date of birth.                                    |
| `height`         | User's height.                                           |
| `Weight`         | User's weight.                                           |
| `bmi`            | User's Body Mass Index (BMI).                            |
| `goalId`         | Array of goal identifiers.                               |
| `levelId`        | Identifier specifying the user's fitness level.          |
| `targetMuscleId` | Array of target muscle identifiers.                      |
| `dietPrefId`     | Identifier specifying the user's dietary preferences.    |

**Example**

```
curl --location '{{base_url}}/api/v1/user/profile' -H 'Authorization: {{yourToken}}' \
--data-urlencode 'firstname={{firstname}}' \
--data-urlencode 'lastname={{lastname}}' \
--data-urlencode 'gender={{gender}}' \
--data-urlencode 'dateOfBirth={{dateOfBirth}}' \
--data-urlencode 'height={{height}}' \
--data-urlencode 'weight={{weight}}' \
--data-urlencode 'goalId={{goalId1}}' \
--data-urlencode 'goalId={{goalId2}}' \
--data-urlencode 'levelId={{levelId}}' \
--data-urlencode 'targetMuscleId={{targetMuscleId1}}' \
--data-urlencode 'targetMuscleId={{targetMuscleId2}}' \
--data-urlencode 'dietPrefId={{dietPrefId}}'
```

```JSON
    {
        "success": true,
        "message": "Profile Data insert successful",
        "data": {
            "profile": {
                "firstname": "firstname",
                "lastname": "lastname",
                "gender": "man",
                "dateOfBirth": "1997-02-26T00:00:00.000Z",
                "height": 165,
                "weight": 55,
                "bmi": 20.2,
                "goalId": [
                    "6560765f1844dab5919f6ea7",
                    "6560765f1844dab5919f6ea8"
                ],
                "levelId": "6560765f1844dab5919f6eab",
                "targetMuscleId": [
                    "6560765f1844dab5919f6ebf",
                    "6560765f1844dab5919f6ec5"
                ],
                "dietPrefId": "65671d4885a200b7bce166bf",
                "userId": "6567833b40e7fd3fc45734bd",
                "_id": "65682857139e2be4d050ee90",
                "createdAt": "2023-11-30T06:14:47.033Z",
                "updatedAt": "2023-11-30T06:14:47.033Z",
                "__v": 0
            }
        }
    }
```

## 2.Edit User Profile

**_Note_**

```
AllUserAuthenticate
```

**HTTP Request**

```
    PUT /api/v1/user/profile
```

**HTTP Headers**

| Parameter       | Description                                      |
| :-------------- | :----------------------------------------------- |
| `Authorization` | User authentication token for API authorization. |

**Request Body**

| Parameter        | Status     | Description                                           |
| :--------------- | :--------- | :---------------------------------------------------- |
| `firstname`      | `optional` | User's first name.                                    |
| `lastname`       | `optional` | User's last name.                                     |
| `gender`         | `optional` | User's gender. `man` or `woman`.                      |
| `dateOfBirth`    | `optional` | User's date of birth (format: YYYY-MM-DD).            |
| `height`         | `optional` | User's height (in cm) - `Min: 50`, `Max: 280`.        |
| `Weight`         | `optional` | User's weight (in kg) - `Min: 10`, `Max: 600`.        |
| `goalId`         | `optional` | Array of goal identifiers.                            |
| `levelId`        | `optional` | Identifier specifying the user's fitness level.       |
| `targetMuscleId` | `optional` | Array of target muscle identifiers.                   |
| `dietPrefId`     | `optional` | Identifier specifying the user's dietary preferences. |

**Response Body**

| Parameter        | Description                                                   |
| :--------------- | :------------------------------------------------------------ |
| `success`        | `True` if data updated is successful, `False` otherwise.      |
| `message`        | Explanation of the outcome (success or failure details).      |
| `data`           | Container for user profile data.                              |
| `profile`        | Object containing user profile information.                   |
| `firstname`      | Updated user's first name.                                    |
| `lastname`       | Updated User's last name.                                     |
| `gender`         | Updated user's gender.                                        |
| `dateOfBirth`    | Updated User's date of birth.                                 |
| `height`         | Updated User's height.                                        |
| `Weight`         | Updated User's weight.                                        |
| `bmi`            | Updated User's Body Mass Index (BMI).                         |
| `goalId`         | Updated Array of goal identifiers.                            |
| `levelId`        | Updated Identifier specifying the user's fitness level.       |
| `targetMuscleId` | Updated Array of target muscle identifiers.                   |
| `dietPrefId`     | Updated Identifier specifying the user's dietary preferences. |

**Example**

```
curl --location --request PUT '{{base_url}}/api/v1/user/profile' -H 'Authorization: {{yourToken}}' \
--data-urlencode 'firstname={{firstname}}' \
--data-urlencode 'lastname={{lastname}}' \
--data-urlencode 'gender={{gender}}' \
--data-urlencode 'dateOfBirth={{dateOfBirth}}' \
--data-urlencode 'height={{height}}' \
--data-urlencode 'weight=90' \
--data-urlencode 'goalId={{goalId1}}' \
--data-urlencode 'goalId={{goalId2}}' \
--data-urlencode 'levelId={{levelId}}' \
--data-urlencode 'targetMuscleId={{targetMuscleId1}}' \
--data-urlencode 'targetMuscleId={{targetMuscleId2}}' \
--data-urlencode 'dietPrefId={{dietPrefId}}'
```

```JSON
    {
        "success": true,
        "message": "Profile Data insert successful",
        "data": {
            "profile": {
                "firstname": "firstname",
                "lastname": "lastname",
                "gender": "man",
                "dateOfBirth": "1997-02-26T00:00:00.000Z",
                "height": 165,
                "weight": 90,
                "bmi": 33.6,
                "goalId": [
                    "6560765f1844dab5919f6ea7",
                    "6560765f1844dab5919f6ea8"
                ],
                "levelId": "6560765f1844dab5919f6eab",
                "targetMuscleId": [
                    "6560765f1844dab5919f6ebf",
                    "6560765f1844dab5919f6ec5"
                ],
                "dietPrefId": "65671d4885a200b7bce166bf",
                "userId": "6567833b40e7fd3fc45734bd",
                "_id": "65682857139e2be4d050ee90",
                "createdAt": "2023-11-30T06:14:47.033Z",
                "updatedAt": "2023-11-30T06:14:47.033Z",
                "__v": 0
            }
        }
    }
```

## 3.Fetch User Profile

**_Note_**

```
AllUserAuthenticate
```

**HTTP Request**

```
    GET /api/v1/user/profile
```

**HTTP Headers**

| Parameter       | Description                                      |
| :-------------- | :----------------------------------------------- |
| `Authorization` | User authentication token for API authorization. |

**Response Body**

| Parameter        | Description                                              |
| :--------------- | :------------------------------------------------------- |
| `success`        | `True` if data insert is successful, `False` otherwise.  |
| `message`        | Explanation of the outcome (success or failure details). |
| `data`           | Container for user profile data.                         |
| `profile`        | Object containing user profile information.              |
| `firstname`      | User's first name.                                       |
| `lastname`       | User's last name.                                        |
| `gender`         | User's gender.                                           |
| `dateOfBirth`    | User's date of birth.                                    |
| `height`         | User's height.                                           |
| `Weight`         | User's weight.                                           |
| `bmi`            | User's Body Mass Index (BMI).                            |
| `goalId`         | Array of goal identifiers.                               |
| `levelId`        | Identifier specifying the user's fitness level.          |
| `targetMuscleId` | Array of target muscle identifiers.                      |
| `dietPrefId`     | Identifier specifying the user's dietary preferences.    |

**Example**

```
curl --location '{{base_url}}/api/v1/user/profile' -H 'Authorization: {{yourToken}}'
```

```JSON
    {
        "success": true,
        "message": "Profile data fetch successful",
        "data": {
            "profile": {
                "_id": "65682857139e2be4d050ee90",
                "firstname": "zaidan",
                "lastname": "syahrani",
                "gender": "man",
                "dateOfBirth": "2001-06-22T00:00:00.000Z",
                "height": 165,
                "weight": 90,
                "bmi": 33.06,
                "goalId": [
                    {
                    "_id": "6560765f1844dab5919f6ea7",
                    "name": "keep fit"
                    },
                    {
                    "_id": "6560765f1844dab5919f6ea8",
                    "name": "improving posture"
                    }
                ],
                "levelId": {
                    "_id": "6560765f1844dab5919f6eab",
                    "name": "newbie"
                },
                "targetMuscleId": [
                    {
                    "_id": "6560765f1844dab5919f6ebf",
                    "name": "triceps"
                    },
                    {
                    "_id": "6560765f1844dab5919f6ec5",
                    "name": "biceps"
                    }
                ],
                "dietPrefId": null
            }
        }
    }
```

## 4.Fetch All User Profile

**HTTP Request**

```
    GET api/v1/user/profile/all
```

**Response Body**

| Parameter        | Description                                              |
| :--------------- | :------------------------------------------------------- |
| `success`        | `True` if data insert is successful, `False` otherwise.  |
| `message`        | Explanation of the outcome (success or failure details). |
| `data`           | Container for user profile data.                         |
| `profile`        | Object containing user profile information.              |
| `firstname`      | User's first name.                                       |
| `lastname`       | User's last name.                                        |
| `gender`         | User's gender.                                           |
| `dateOfBirth`    | User's date of birth.                                    |
| `height`         | User's height.                                           |
| `Weight`         | User's weight.                                           |
| `bmi`            | User's Body Mass Index (BMI).                            |
| `goalId`         | Array of goal identifiers.                               |
| `levelId`        | Identifier specifying the user's fitness level.          |
| `targetMuscleId` | Array of target muscle identifiers.                      |
| `dietPrefId`     | Identifier specifying the user's dietary preferences.    |

**Example**

```
curl --location '{{base_url}}/api/v1/user/profile/all'
```

```JSON
{
  "success": true,
  "message": "Profile data fetch successful",
  "data": {
    "profile": {
      "_id": "65682857139e2be4d050ee90",
      "firstname": "firstname",
      "lastname": "lastname",
      "gender": "man",
      "dateOfBirth": "1997-02-26T00:00:00.000Z",
      "height": 165,
      "weight": 90,
      "bmi": 33.06,
      "goalId": [
        {
          "_id": "6560765f1844dab5919f6ea7",
          "name": "keep fit"
        },
        {
          "_id": "6560765f1844dab5919f6ea8",
          "name": "improving posture"
        }
      ],
      "levelId": {
        "_id": "6560765f1844dab5919f6eab",
        "name": "newbie"
      },
      "targetMuscleId": [
        {
          "_id": "6560765f1844dab5919f6ebf",
          "name": "triceps"
        },
        {
          "_id": "6560765f1844dab5919f6ec5",
          "name": "biceps"
        }
      ],
      "dietPrefId": null
    }
  }
}
```
