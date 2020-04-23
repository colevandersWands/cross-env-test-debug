export default class LiveStudy {
  constructor(exercises, title) {
    this.exercises = exercises;
  }
  async loadAll(dir) {
    dir = dir || this.exercises;
    if (dir.dirs) {
      dir.dirs.forEach(subDir => this.loadAll(subDir));
    };
    if (dir.exercises) {
      for (let exercise of dir.exercises) {
        try {
          const msg = '--- ' + exercise.path.abs + ' ---';
          eval(await exercise.load(msg));
        } catch (err) {
          console.error(err);
        };
      };
    };
  }

  render() {
    const container = document.createElement('ul');

    for (let file of this.exercises.dirs) {
      const li = document.createElement('li');
      li.appendChild(file.exercise.render());
      container.appendChild(li);
    }

    return container;
  }
}
