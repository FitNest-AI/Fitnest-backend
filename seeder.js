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
    //       {
    //         "name": "hips"
    //       },
    //       {
    //         name: 'forearms',
    //       },
    //       {
    //         name: 'Quadriceps',
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
            orientation: 'portrait',
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
          {
            name: 'Barbell Bicep Curl',
            desc: 'Exercise targeting biceps and forearms using a barbell. Perform controlled curls to build arm strength and definition.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: '657e033a7744a82ac69b8e92',
            targetMuscleId: ['657e033a7744a82ac69b8ea0', '657e30dc0ca4cc1590a3b044'],
            direction: 'front',
            orientation: 'portrait',
            instruction: 'Stand with feet shoulder-width apart. Lower body by bending knees and hips. Rise back up to starting position.',
            start: {
              right_knee: 360,
              left_knee: 360,
              right_hip: 360,
              left_hip: 360,
              right_elbow: 10,
              left_elbow: 10,
            },
            end: {
              right_knee: 360,
              left_knee: 360,
              right_hip: 360,
              left_hip: 360,
              right_elbow: 160,
              left_elbow: 160,
            },
          },
          {
            name: 'Hammer Curl',
            desc: 'Exercise targeting biceps and forearms using dumbbells. Perform controlled curls with a neutral grip for strength and definition.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: '657e033a7744a82ac69b8e92',
            targetMuscleId: ['657e033a7744a82ac69b8ea0', '657e30dc0ca4cc1590a3b044'],
            direction: 'front',
            orientation: 'portrait',
            instruction: 'Stand with feet shoulder-width apart. Lower body by bending knees and hips. Rise back up to starting position.',
            start: {
              right_knee: 360,
              left_knee: 360,
              right_hip: 360,
              left_hip: 360,
              right_elbow: 10,
              left_elbow: 10,
            },
            end: {
              right_knee: 360,
              left_knee: 360,
              right_hip: 360,
              left_hip: 360,
              right_elbow: 180,
              left_elbow: 180,
            },
          },
          {
            name: 'Hip Thrust',
            desc: 'Exercise targeting hips and glutes. Perform controlled hip thrusts for lower body strength and glute activation.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: '657e033a7744a82ac69b8e92',
            targetMuscleId: ['657e325d1a78fdb254a7b3c5', '657e033a7744a82ac69b8e9b'],
            direction: 'side',
            orientation: 'portrait',
            instruction: 'Sit with your back against a bench and a barbell across your hips. Lower and raise your hips for a controlled hip thrust.',
            start: {
              right_knee: 150,
              left_knee: 150,
              right_hip: 130,
              left_hip: 130,
              right_elbow: 360,
              left_elbow: 360,
            },
            end: {
              right_knee: 100,
              left_knee: 100,
              right_hip: 25,
              left_hip: 25,
              right_elbow: 360,
              left_elbow: 360,
            },
          },
          {
            name: 'Lateral Raise',
            desc: 'Exercise targeting shoulders. Perform lateral raises to strengthen and define the shoulder muscles.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: '657e033a7744a82ac69b8e92',
            targetMuscleId: ['657e033a7744a82ac69b8e9f'],
            direction: 'front',
            orientation: 'portrait',
            instruction: 'Hold dumbbells at your sides. Lift your arms outward to the sides until they are parallel to the ground, then lower them back down.',
            start: {
              right_knee: 90,
              left_knee: 90,
              right_hip: 90,
              left_hip: 90,
              right_elbow: 360,
              left_elbow: 360,
            },
            end: {
              right_knee: 90,
              left_knee: 90,
              right_hip: 90,
              left_hip: 90,
              right_elbow: 100,
              left_elbow: 100,
            },
          },
          {
            name: 'Leg Raise',
            desc: 'Exercise targeting hips and lower abs. Perform leg raises to strengthen the lower abdominal muscles.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: '657e033a7744a82ac69b8e92',
            targetMuscleId: ['657e325d1a78fdb254a7b3c5', '657e033a7744a82ac69b8e9e'],
            direction: 'side',
            orientation: 'portrait',
            instruction: 'Lie on your back with legs extended. Lift your legs upward, keeping them straight, then lower them back down without touching the ground.',
            start: {
              right_knee: 20,
              left_knee: 20,
              right_hip: 10,
              left_hip: 10,
              right_elbow: 360,
              left_elbow: 360,
            },
            end: {
              right_knee: 360,
              left_knee: 360,
              right_hip: 280,
              left_hip: 280,
              right_elbow: 360,
              left_elbow: 360,
            },
          },
          {
            name: 'Pull-up',
            desc: 'Compound exercise targeting back and biceps. Perform pull-ups to build upper body strength and define the back muscles.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: '657e033a7744a82ac69b8e92',
            targetMuscleId: ['657e033a7744a82ac69b8e9d', '657e033a7744a82ac69b8ea0'],
            direction: 'front',
            orientation: 'portrait',
            instruction: 'Hang from a horizontal bar with palms facing away. Pull your body upward until your chin passes the bar, then lower back down.',
            start: {
              right_knee: 360,
              left_knee: 360,
              right_hip: 360,
              left_hip: 360,
              right_elbow: 10,
              left_elbow: 10,
            },
            end: {
              right_knee: 360,
              left_knee: 360,
              right_hip: 360,
              left_hip: 360,
              right_elbow: 160,
              left_elbow: 160,
            },
          },
          {
            name: 'Russian Twist',
            desc: 'Exercise targeting obliques and core. Perform Russian twists to strengthen the rotational muscles of the core.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: '657e033a7744a82ac69b8e92',
            targetMuscleId: ['657e033a7744a82ac69b8e9b', '657e033a7744a82ac69b8e9e'],
            direction: 'side',
            orientation: 'portrait',
            instruction: 'Sit on the ground with knees bent. Lean back slightly and twist your torso to one side, then the other, holding a weight or medicine ball for resistance.',
            start: {
              right_knee: 90,
              left_knee: 90,
              right_hip: 120,
              left_hip: 120,
              right_elbow: 360,
              left_elbow: 360,
            },
            end: {
              right_knee: 90,
              left_knee: 90,
              right_hip: 90,
              left_hip: 90,
              right_elbow: 100,
              left_elbow: 100,
            },
          },
          {
            name: 'Tricep Dips',
            desc: 'Exercise targeting triceps. Perform tricep dips to isolate and strengthen the tricep muscles.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: '657e033a7744a82ac69b8e92',
            targetMuscleId: ['657e033a7744a82ac69b8e9a'],
            direction: 'side',
            orientation: 'portrait',
            instruction: 'Sit on the edge of a bench with hands placed beside hips. Lower your body by bending elbows, then push back up to starting position.',
            start: {
              right_knee: 360,
              left_knee: 360,
              right_hip: 360,
              left_hip: 360,
              right_elbow: 360,
              left_elbow: 360,
            },
            end: {
              right_knee: 360,
              left_knee: 360,
              right_hip: 360,
              left_hip: 360,
              right_elbow: 30,
              left_elbow: 30,
            },
          },
          {
            name: 'Tricep Pushdown',
            desc: 'Exercise targeting triceps. Perform tricep pushdowns using a cable machine for isolated tricep muscle engagement.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: '657e033a7744a82ac69b8e92',
            targetMuscleId: ['657e033a7744a82ac69b8e9a'],
            direction: 'side',
            orientation: 'portrait',
            instruction: 'Stand in front of a cable machine with elbows close to your sides. Push the cable down, extending your elbows, then return to the starting position.',
            start: {
              right_knee: 360,
              left_knee: 360,
              right_hip: 360,
              left_hip: 360,
              right_elbow: 20,
              left_elbow: 20,
            },
            end: {
              right_knee: 360,
              left_knee: 360,
              right_hip: 360,
              left_hip: 360,
              right_elbow: 180,
              left_elbow: 180,
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
