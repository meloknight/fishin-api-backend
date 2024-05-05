const pool = require("../db");
const jStat = require("jstat");

const getAllFish = async (req, res) => {
  try {
    console.log(req.requestTime);
    const allFish = await pool.query("SELECT * FROM fish");
    res.json(allFish.rows);
  } catch (error) {
    console.error(error.message);
  }
};

const createFish = async (req, res) => {
  try {
    const {
      fish_name,
      fish_mean_weight_kg,
      fish_weight_boundary_kg,
      fish_mean_length_cm,
      fish_length_boundary_cm,
      rarity,
    } = req.body;
    const newFish = await pool.query(
      "INSERT INTO fish (fish_name, fish_mean_weight_kg, fish_weight_boundary_kg, fish_mean_length_cm, fish_length_boundary_cm, rarity) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        fish_name,
        fish_mean_weight_kg,
        fish_weight_boundary_kg,
        fish_mean_length_cm,
        fish_length_boundary_cm,
        rarity,
      ]
    );
    res.status(200).json(newFish.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

const getSpecificFish = async (req, res) => {
  try {
    const { id } = req.params;
    const fish = await pool.query("SELECT * FROM fish WHERE fish_id = $1", [
      id,
    ]);
    if (!fish.rows[0]) {
      res.status(400).send(`Fish with id ${id} is not in database`);
    }
    res.json(fish.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

const goFishin = async (req, res) => {
  try {
    const fishIdsAndRarities = await pool.query(
      "SELECT fish_id, rarity FROM fish;"
    );

    const rarityWeights = {
      common: 20,
      uncommon: 15,
      rare: 8,
      ultra: 4,
      legendary: 2,
    };

    const fishIdsAndNumericalRarity = [];
    for (let i = 0; i < fishIdsAndRarities.rows.length; i++) {
      const numericalRarity = rarityWeights[fishIdsAndRarities.rows[i].rarity];
      fishIdsAndNumericalRarity.push({
        fish_id: fishIdsAndRarities.rows[i].fish_id,
        numRarity: numericalRarity,
      });
    }

    let sumNumRarity = fishIdsAndNumericalRarity.reduce(
      (sum, currentValue) => currentValue.numRarity + sum,
      0
    );

    let sumRandom = Math.floor(Math.random() * sumNumRarity) + 1;
    let chosenFishId;
    for (let i = 0; i < fishIdsAndNumericalRarity.length; i++) {
      if (fishIdsAndNumericalRarity[i].numRarity > sumRandom) {
        chosenFishId = fishIdsAndNumericalRarity[i].fish_id;
        break;
      }
      sumRandom -= fishIdsAndNumericalRarity[i].numRarity;
    }

    console.log(`Chosen fish has fish_id: ${chosenFishId}`);

    const fish = await pool.query("SELECT * FROM fish WHERE fish_id = $1", [
      chosenFishId,
    ]);
    console.log(fish.rows[0]);
    // -- FISH IS CHOSEN NOW -- //

    const weightMean = fish.rows[0].fish_mean_weight_kg;
    const weightStdDev = fish.rows[0].fish_weight_boundary_kg;
    const lengthMean = fish.rows[0].fish_mean_length_cm;
    const lengthStdDev = fish.rows[0].fish_length_boundary_cm;

    const fishWeight =
      Math.floor(jStat.normal.sample(weightMean, weightStdDev) * 100) / 100;
    const fishLength =
      Math.floor(jStat.normal.sample(lengthMean, lengthStdDev) * 10) / 10;
    // -- FISH WEIGHT AND LENGTH CHOSEN NOW -- //

    console.log(
      `The fish is ${fish.rows[0].fish_name} and it weighs ${fishWeight}kg's and is ${fishLength}cm's long`
    );

    const fishResponse = {
      fish_name: fish.rows[0].fish_name,
      fish_weight_kgs: fishWeight,
      fish_length_cms: fishLength,
    };
    res.status(200).json(fishResponse);
  } catch (error) {
    console.error(error.message);
  }
};

const updateFish = async (req, res) => {
  try {
    const { id } = req.params;
    const { fish_name } = req.body;
    console.log(`The fish_id is: ${id} and the fish_name will be ${fish_name}`);
    const updateFish = await pool.query(
      "UPDATE fish SET fish_name = $1 WHERE fish_id = $2",
      [fish_name, id]
    );
    res.status(200).json({ completed: true });
  } catch (error) {
    console.error(error.message);
  }
};

const deleteFish = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFish = await pool.query("DELETE FROM fish WHERE fish_id = $1", [
      id,
    ]);
    res.json({ completed: true });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllFish,
  createFish,
  getSpecificFish,
  goFishin,
  updateFish,
  deleteFish,
};

// ---------------------
// REMOVED ITEMS FOR REFERENCE
// ---------------------
// const fishListLength = await pool.query(
//   "SELECT COUNT(fish_name) FROM fish;"
// );

// const random = Math.random();
// const randomNumber = Math.ceil(
//   random * Number(fishListLength.rows[0].count)
// );
