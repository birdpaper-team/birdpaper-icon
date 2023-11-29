import type { App } from 'vue';
import _IconRobotTwo from './icon-robot-two.vue';

const IconRobotTwo = Object.assign(_IconRobotTwo, {
  install: (app: App) => {
    app.component(_IconRobotTwo.name, _IconRobotTwo);
  }
});

export default IconRobotTwo;