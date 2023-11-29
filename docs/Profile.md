# Profile

This Api for profile

## 1.insertUserProfileWhenLogin

**HTTP Request**

```
    POST /api/v1/user/profile
```

**Request Body**

| Parameter        | Description                |
| :----------------| :------------------------- |
| `firstname`      |   |
| `lastname`       |   |
| `gender`         |   |
| `dateOfBirth`    |   |
| `height`         |   |
| `Weight`         |   |
| `goalId`         |   |
| `levelId`        |   |
| `targetMuscleId` |   |
| `conditionId`    |   |
| `dietPrefId`     |   |

**Response**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `firstname`      |   |
| `lastname`       |   |
| `gender`         |   |
| `dateOfBirth`    |   |
| `height`         |   |
| `Weight`         |   |
| `goalId`         |   |
| `levelId`        |   |
| `targetMuscleId` |   |
| `conditionId`    |   |
| `dietPrefId`     |   |


**Example**

```
curl --location 'localhost:3000/api/v1/user/profile' \
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
--data-urlencode 'conditionId={{conditionId}}' \
--data-urlencode 'dietPrefId={{dietPrefId}}'
```

```JSON
```

## 2.editUserProfileWhenLogin

**HTTP Request**

```
    PUT /api/v1/user/profile
```

**Request Body**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `firstname`      |   |
| `lastname`       |   |
| `gender`         |   |
| `dateOfBirth`    |   |
| `height`         |   |
| `Weight`         |   |
| `goalId`         |   |
| `levelId`        |   |
| `targetMuscleId` |   |
| `conditionId`    |   |
| `dietPrefId`     |   |

**Response**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `firstname`      |   |
| `lastname`       |   |
| `gender`         |   |
| `dateOfBirth`    |   |
| `height`         |   |
| `Weight`         |   |
| `goalId`         |   |
| `levelId`        |   |
| `targetMuscleId` |   |
| `conditionId`    |   |
| `dietPrefId`     |   |

**Example**

```
curl --location --request PUT 'localhost:3000/api/v1/user/profile' \
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
--data-urlencode 'conditionId={{conditionId}}' \
--data-urlencode 'dietPrefId={{dietPrefId}}'
```

```JSON
```

## 3.fetchUserProfileWhenLogin

**HTTP Request**

```
    GET /api/v1/user/profile
```

**Response**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `firstname`      |   |
| `lastname`       |   |
| `gender`         |   |
| `dateOfBirth`    |   |
| `height`         |   |
| `Weight`         |   |
| `goalId`         |   |
| `levelId`        |   |
| `targetMuscleId` |   |
| `conditionId`    |   |
| `dietPrefId`     |   |

**Example**

```
curl --location 'localhost:3000/api/v1/user/profile'
```

```JSON
```

## 4.fetchAllUserProfile

**HTTP Request**

```
    GET api/v1/user/profile/all
```

**Response**

| Parameter         | Description                |
| :---------------- | :------------------------- |
| `firstname`      |   |
| `lastname`       |   |
| `gender`         |   |
| `dateOfBirth`    |   |
| `height`         |   |
| `Weight`         |   |
| `goalId`         |   |
| `levelId`        |   |
| `targetMuscleId` |   |
| `conditionId`    |   |
| `dietPrefId`     |   |

**Example**

```
curl --location 'localhost:3000/api/v1/user/profile/all'
```

```JSON
```


