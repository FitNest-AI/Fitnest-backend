'use-strict';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// import models to be seeding
const RolesModels = require('./models/RolesModel');
const GoalsModel = require('./models/GoalsModel');
const LevelsModel = require('./models/LevelsModel');
const DietPrefsModel = require('./models/DietPrefsModel');
const TargetMusclesModel = require('./models/TargetMusclesModel');
const ExercisesModel = require('./models/ExercisesModel');

const populateModels = async (data) => {
  await Promise.all(data.map(async ({Model, data}) => {
    try {
      await Model.deleteMany({});
      await Model.insertMany(data);

      console.log(`Data seeded successfully for model: ${Model.modelName}`);
    } catch (error) {
      console.error(`Error seeding data for model ${Model.modelName}:`, error);
    }
  }));
};

const getDocId = async (model, limit) => {
  const data = await model.find().select('_id').lean();
  if (limit > 1) {
    return await data.slice(0, limit).map(({_id}) => {
      return _id;
    });
  } else {
    for (let i = 0; i <= 0; i++) {
      return data[0]._id;
    }
  }
};

const seeding = async () => {
  try {
    // Database connection Config
    await require('./configs/DatabaseConfig').connect(process.env.MONGO_URI);
    // const data = [
    //   {
    //     Model: RolesModels,
    //     data: [
    //       {
    //         name: 'standard',
    //       },
    //       {
    //         name: 'premium',
    //       },
    //     ],
    //   },

    //   {
    //     Model: GoalsModel,
    //     data: [
    //       {
    //         name: 'gain muscle',
    //       },
    //       {
    //         name: 'lose weight',
    //       },
    //       {
    //         name: 'keep fit',
    //       },
    //       {
    //         name: 'improving posture',
    //       },
    //     ],
    //   },

    //   {
    //     Model: LevelsModel,
    //     data: [
    //       {
    //         name: 'easy',
    //       },
    //       {
    //         name: 'medium',
    //       },
    //       {
    //         name: 'hard',
    //       },
    //     ],
    //   },

    //   {
    //     Model: DietPrefsModel,
    //     data: [
    //       {
    //         name: 'non vegan',
    //         desc: 'Consumes all types of food, including meat, fish, animal products, and plant-based foods',
    //       },
    //       {
    //         name: 'vegan',
    //         desc: 'Does not consume meat but may include non-meat animal products such as dairy or eggs in their diet',
    //       },
    //     ],
    //   },

    //   {
    //     Model: TargetMusclesModel,
    //     data: [
    //       {
    //         name: 'legs',
    //       },
    //       {
    //         name: 'triceps',
    //       },
    //       {
    //         name: 'glutes',
    //       },
    //       {
    //         name: 'chest',
    //       },
    //       {
    //         name: 'back',
    //       },
    //       {
    //         name: 'abs',
    //       },
    //       {
    //         name: 'shoulders',
    //       },
    //       {
    //         name: 'biceps',
    //       },
    //       {
    //         name: 'hamstrings',
    //       },
    //     ],
    //   },

    //   {
    //     Model: SidesModel,
    //     data: [
    //       {
    //         name: 'front',
    //         instruction: 'front instruction',
    //       },
    //       {
    //         name: 'side',
    //         instruction: 'side instruction',
    //       },
    //     ],
    //   },

    //   // {
    //   //   Model: ConditionsModel,
    //   //   data: [
    //   //     {
    //   //       name: 'not fit',
    //   //     },
    //   //     {
    //   //       name: 'fit',
    //   //     },
    //   //     {
    //   //       name: 'very fit',
    //   //     },
    //   //   ],
    //   // },
    // ];
    // await populateModels(data);

    const exerciseData = [
      {
        Model: ExercisesModel,
        data: [
          {
            name: 'squat',
            desc: 'Squat is a fundamental lower body exercise that targets the quadriceps, hamstrings, and glutes. It also engages the core muscles for stability.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: '657e033a7744a82ac69b8e92',
            targetMuscleId: ['657e033a7744a82ac69b8ea1', '657e033a7744a82ac69b8e9b', '657e08b3b985a016868c769f'],
            direction: 'side',
            orientation: 'potrait',
            instruction: 'Stand with your feet shoulder-width apart. Lower your body by bending your knees and hips, as if sitting back into a chair. Keep your back straight and chest up. Rise back up to the starting position.',
            start: {
              right_knee: 0,
              left_knee: 0,
              right_hip: 130,
              left_hip: 130,
              right_elbow: 360,
              left_elbow: 360,
            },
            end: {
              right_knee: 90,
              left_knee: 90,
              right_hip: 50,
              left_hip: 50,
              right_elbow: 360,
              left_elbow: 360,
            },
          },
          {
            name: 'push-up',
            desc: 'Push-up is a compound exercise that targets the chest, shoulders, and triceps. It also engages the core for stability.',
            image: 'https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png',
            levelId: '657e033a7744a82ac69b8e92',
            targetMuscleId: ['657e033a7744a82ac69b8e9c', '657e033a7744a82ac69b8e9f', '657e033a7744a82ac69b8e9a'],
            direction: 'side',
            orientation: 'landscape',
            instruction: 'Start in a plank position with your hands placed slightly wider than shoulder-width apart. Lower your body by bending your elbows, keeping your body in a straight line. Push back up to the starting position.',
            start: {
              right_knee: 10,
              left_knee: 10,
              right_hip: 10,
              left_hip: 10,
              right_elbow: 350,
              left_elbow: 350,
            },
            end: {
              right_knee: 15,
              left_knee: 15,
              right_hip: 10,
              left_hip: 10,
              right_elbow: 250,
              left_elbow: 250,
            },
          },
          {
            name: 'sit-up',
            desc: 'Sit-up is an abdominal exercise that targets the rectus abdominis and strengthens the core muscles. It is effective for building abdominal strength and endurance.',
            image: 'https://storage.googleapis.com/fitnest-project-bucket/exercise/exercise.png',
            levelId: '657e033a7744a82ac69b8e92',
            targetMuscleId: ['657e033a7744a82ac69b8e9e'],
            direction: 'side',
            orientation: 'landscape',
            instruction: 'Lie on your back with your knees bent and feet flat on the ground. Cross your arms over your chest or place your hands behind your ears. Engage your core as you lift your upper body toward your knees. Exhale as you come up and inhale as you lower back down to the starting position.',
            start: {
              right_knee: 90,
              left_knee: 90,
              right_hip: 130,
              left_hip: 130,
              right_elbow: 360,
              left_elbow: 360,
            },
            end: {
              right_knee: 90,
              left_knee: 90,
              right_hip: 50,
              left_hip: 50,
              right_elbow: 360,
              left_elbow: 360,
            },
          },
        ],
      },
    ];
    await populateModels(exerciseData);
  } catch (error) {
    console.log(error.message);
  }
};

seeding();
