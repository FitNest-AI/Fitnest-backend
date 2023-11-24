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
const ConditionsModel = require('./models/ConditionsModel');
const SidesModel = require('./models/SidesModel');
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
    const data = [
      {
        Model: RolesModels,
        data: [
          {
            name: 'standard',
          },
          {
            name: 'premium',
          },
        ],
      },

      {
        Model: GoalsModel,
        data: [
          {
            name: 'gain muscle',
          },
          {
            name: 'lose weight',
          },
          {
            name: 'keep fit',
          },
          {
            name: 'improving posture',
          },
        ],
      },

      {
        Model: LevelsModel,
        data: [
          {
            name: 'newbie',
          },
          {
            name: 'beginner',
          },
          {
            name: 'intermediate',
          },
          {
            name: 'advanced',
          },
        ],
      },

      {
        Model: ConditionsModel,
        data: [
          {
            name: 'not fit',
          },
          {
            name: 'fit',
          },
          {
            name: 'very fit',
          },
        ],
      },

      {
        Model: DietPrefsModel,
        data: [
          {
            name: 'flexitarian',
            desc: 'Consumes all types of food, including meat, fish, animal products, and plant-based foods',
          },
          {
            name: 'vegan',
            desc: 'Does not consume animal products, including meat, dairy, eggs, and other animal-derived products',
          },
          {
            name: 'vegetarian',
            desc: 'Does not consume meat but may include non-meat animal products such as dairy or eggs in their diet',
          },
          {
            name: 'pescetarian',
            desc: 'Avoids meat except for fish and fish products',
          },
        ],
      },

      {
        Model: TargetMusclesModel,
        data: [
          {
            name: 'legs',
          },
          {
            name: 'triceps',
          },
          {
            name: 'glutes',
          },
          {
            name: 'chest',
          },
          {
            name: 'back',
          },
          {
            name: 'abs',
          },
          {
            name: 'shoulders',
          },
          {
            name: 'biceps',
          },
          {
            name: 'hamstrings',
          },
        ],
      },

      {
        Model: SidesModel,
        data: [
          {
            name: 'front',
            instruction: 'front instruction',
          },
          {
            name: 'side',
            instruction: 'side instruction',
          },
        ],
      },
    ];
    await populateModels(data);

    const exerciseData = [
      {
        Model: ExercisesModel,
        data: [
          {
            name: 'squat',
            desc: 'Squat is a fundamental lower body exercise that targets the quadriceps, hamstrings, and glutes. It also engages the core muscles for stability.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: await getDocId(LevelsModel, 1),
            targetMuscleId: await getDocId(TargetMusclesModel, 3),
            sideId: await getDocId(SidesModel, 1),
            orientation: 'landscape',
            instruction: 'Stand with your feet shoulder-width apart. Lower your body by bending your knees and hips, as if sitting back into a chair. Keep your back straight and chest up. Rise back up to the starting position.',
          },
          {
            name: 'push-up',
            desc: 'Push-up is a compound exercise that targets the chest, shoulders, and triceps. It also engages the core for stability.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: await getDocId(LevelsModel, 1),
            targetMuscleId: await getDocId(TargetMusclesModel, 1),
            sideId: await getDocId(SidesModel, 1),
            orientation: 'portrait',
            instruction: 'Start in a plank position with your hands placed slightly wider than shoulder-width apart. Lower your body by bending your elbows, keeping your body in a straight line. Push back up to the starting position.',
          },
          {
            name: 'pull-up',
            desc: 'Pull-up is a challenging upper body exercise that targets the back, biceps, and shoulders. It helps build strength and muscle definition in the upper body.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: await getDocId(LevelsModel, 1),
            targetMuscleId: await getDocId(TargetMusclesModel, 2),
            sideId: await getDocId(SidesModel, 1),
            orientation: 'landscape',
            instruction: 'Hang from a pull-up bar with your palms facing away. Pull your body up towards the bar, bringing your chest close to it. Lower yourself back down with control.',
          },
          {
            name: 'weighted dips',
            desc: 'Weighted dips are an advanced upper body exercise that targets the chest, triceps, shoulders, and upper back. It involves using additional weight for added resistance.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: await getDocId(LevelsModel, 1),
            targetMuscleId: await getDocId(TargetMusclesModel, 5),
            sideId: await getDocId(SidesModel, 1),
            orientation: 'portrait',
            instruction: 'Position yourself between parallel bars. Lower your body by bending your elbows until your shoulders are below your elbows. Push back up to the starting position.',
          },
          {
            name: 'crunches',
            desc: 'Crunches are a basic abdominal exercise that targets the rectus abdominis. It is effective for building core strength and definition.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: await getDocId(LevelsModel, 1),
            targetMuscleId: await getDocId(TargetMusclesModel, 1),
            sideId: await getDocId(SidesModel, 1),
            orientation: 'portrait',
            instruction: 'Lie on your back with your knees bent. Place your hands behind your head and lift your upper body towards your knees. Lower back down to the starting position.',
          },
          {
            name: 'shoulder press',
            desc: 'Shoulder press is a compound exercise that targets the shoulders and triceps. It helps build upper body strength and shoulder definition.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: await getDocId(LevelsModel, 1),
            targetMuscleId: await getDocId(TargetMusclesModel, 3),
            sideId: await getDocId(SidesModel, 1),
            orientation: 'landscape',
            instruction: 'Sit or stand with a weight in each hand. Lift the weights overhead by extending your arms. Lower them back down to shoulder level.',
          },
          {
            name: 'Romanian deadlift',
            desc: 'Romanian deadlift is an advanced exercise that targets the hamstrings, glutes, and lower back. It involves hip hinge movement with a straight back.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: await getDocId(LevelsModel, 1),
            targetMuscleId: await getDocId(TargetMusclesModel, 4),
            sideId: await getDocId(SidesModel, 1),
            orientation: 'portrait',
            instruction: 'Hold a barbell in front of your thighs with a shoulder-width grip. Hinge at your hips, keeping your back straight, and lower the barbell towards the ground. Stand back up by extending your hips.',
          },
          {
            name: 'lunges',
            desc: 'Lunges are a basic lower body exercise that targets the quadriceps, hamstrings, and glutes. They also engage the core for balance.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: await getDocId(LevelsModel, 1),
            targetMuscleId: await getDocId(TargetMusclesModel, 1),
            sideId: await getDocId(SidesModel, 1),
            orientation: 'landscape',
            instruction: 'Take a step forward with one foot and lower your body until both knees are bent at a 90-degree angle. Push back up to the starting position and repeat on the other leg.',
          },
          {
            name: 'tricep dips',
            desc: 'Tricep dips are a beginner-friendly exercise that targets the triceps. It involves lowering and raising your body using a stable surface.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: await getDocId(LevelsModel, 1),
            targetMuscleId: await getDocId(TargetMusclesModel, 1),
            sideId: await getDocId(SidesModel, 1),
            orientation: 'portrait',
            instruction: 'Position yourself on parallel bars. Lower your body by bending your elbows until your upper arms are parallel to the ground. Push back up to the starting position.',
          },
          {
            name: 'barbell rows',
            desc: 'Barbell rows are an advanced compound exercise that targets the back, biceps, and shoulders. It involves pulling a barbell towards your lower chest.',
            image: 'https://storage.googleapis.com/formal-outpost-402813-bucket/exercise/dYjuOFZi3Gu7b1O2dC5AFj6DjeYuak54-20231114-014533',
            levelId: await getDocId(LevelsModel, 1),
            targetMuscleId: await getDocId(TargetMusclesModel, 1),
            sideId: await getDocId(SidesModel, 1),
            orientation: 'landscape',
            instruction: 'Bend at the hips and knees to pick up a barbell with a shoulder-width grip. Pull the barbell towards your lower chest, squeezing your shoulder blades together. Lower the barbell back down with control.',
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

