const models = require("../models");

class ProjectController {
  static addProject = (req, res) => {
    models.project
      .insert(req.body)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProjectController;
