const Thing = require('../models/Thing');

exports.createThings = (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
      ...req.body
    });
    thing.save()
     .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
     .catch(error => res.status(400).json({ error }));
  }

  exports.modifyThings = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
     .then(() => res.status(200).json({ message: 'Objet Modifié !'}))
     .catch(error => res.status(400).json({ error }));
  }

  exports.deleteThings = (req, res, next) => {
    Thing.deleteOne({ _i: req.params.id})
     .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
     .catch(error => res.status(400).json({ error }));
  }

  exports.getOneThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id})
     .then(thing => res.status(200).json(thing))
     .catch(error => res.status(404).json({ error }));
  }

  exports.getAllThings = (req, res, next) => {
    Thing.find()
     .then(things => res.status(200).json(things))
     .catch(error => res.status(400).json({ error }));
  }