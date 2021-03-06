const Pet = require('../Models/petModel');

const getPetById = (req, res) => {
    Pet.findOne({_id: req.params.id}, req.body).then(pet => {
        res.json(pet);
    });
};

const createPet = (req, res) => {
    Pet.create(req.body).then(pet => {
        res.json(pet);
    });
};

const updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body).then(pet => {
        res.json(pet);
    });
};

const deletePet = (req, res) => {
    Pet.delete({_id: req.params.id}).then(pet => {
        res.json(pet);
    });
};

module.exports = {
    getPetById,
    createPet,
    updatePet,
    deletePet
};
