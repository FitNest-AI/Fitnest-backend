  # Fitnest API Documentation

  The Fitness API is a tool built with Express.js and MongoDB that utilizes AI guidance to assist users in their workouts. This documentation provides comprehensive instructions on utilizing the API's endpoints and their functionalities.

  ## Endpoints

  The endpoints are categorized into 11 folders.

  - [Authentication](https://github.com/zdnsyrhn22/fitnest-backend/blob/main/docs/Authentication.md)
  - [Profile](https://github.com/zdnsyrhn22/fitnest-backend/blob/main/docs/Profile.md)
  - [User](https://github.com/zdnsyrhn22/fitnest-backend/blob/main/docs/User.md)
  - [Diet Preference](https://github.com/zdnsyrhn22/fitnest-backend/blob/main/docs/dietPreference.md)
  - [Exercise](https://github.com/zdnsyrhn22/fitnest-backend/blob/main/docs/Exercise.md)
  - [Goal](https://github.com/zdnsyrhn22/fitnest-backend/blob/main/docs/Goal.md)
  - [Level](https://github.com/zdnsyrhn22/fitnest-backend/blob/main/docs/Level.md)
  - [Target Muscle](https://github.com/zdnsyrhn22/fitnest-backend/blob/main/docs/Target%20Muscle.md)
  - [Workout](https://github.com/zdnsyrhn22/fitnest-backend/blob/main/docs/Workout.md)
  - [Food Recomender](https://github.com/FitNest-AI/Food-Recomender)
  - [Workout Recomender](https://github.com/FitNest-AI/Workout-Recomender)

## Fitnest Architecture
![](https://github.com/FitNest-AI/fitnest-backend/blob/main/docs/Fitnest%20Architecture.jpg)

## How to run this API on your local machine 💻
If you want to run this API Server on your local machine, you need to do these steps:
- First, clone this repository. `git clone https://github.com/FitNest-AI/fitnest-backend.git`
- Second, open the terminal and go to this project's root directory.
- Third, type `npm install` in your terminal and hit enter button.
- Fourth, type `npm run start-dev` in your terminal and hit enter button.
- Finally, the server will run on your http://localhost:3000

## How to deploy this API to Cloud Run 🚀
If you want to deploy this API server to Cloud Run, you need to follow this steps:
- First, open your Google Cloud Console. https://console.cloud.google.com/
- Second, open the Cloud Shell at the right top corner in the Google Cloud Console. Make sure you enable Cloud Run API and Cloud Build API before.
- Third, copy the command below to cloning this repository into the Cloud Shell.
 ```
git clone https://github.com/FitNest-AI/fitnest-backend.git
 ```
- Fourth, go to this project's root directory in the Cloud Shell.
```
cd fitnest-backend
export PROJECT_ID= <Your GCP project ID>
```
- Fifth, copy the command below to build the image container and upload it to the Container Registry.
 ```
gcloud builds submit \
  --tag gcr.io/$PROJECT_ID/fitnest-backend
  ```
- Sixth, copy the command below to deploy your image container to Cloud Run.
 ```
 gcloud run deploy fitnest-backend \
  --image gcr.io/$PROJECT_ID/fitnest-backend \
  --platform managed \
  --cpu=1 \
  --memory=512Mi \
  --region asia-southeast2 \
  --allow-unauthenticated \
  --max-instances=3 \
  --port=3000
 ```
- Finally, your API server will be deploy to Cloud Run and you will get the URL in the Cloud Shell to access the your server.
