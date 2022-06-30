const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(project) {
    const isFinished = false;
    const dateCreated = new Date();
    const dateEnd = new Date();
    const customerId = 1;
    console.error(dateCreated);
    const { title, description, methode } = project;
    return this.connection.query(
      `insert into ${ProjectManager.table} (title, description, isFinished, methode, dateCreated, dateEnd, customerId ) values (?,?,?,?,?,?,?)`,
      [
        title,
        description,
        isFinished,
        methode,
        dateCreated,
        dateEnd,
        customerId,
      ]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ProjectManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ProjectManager;
