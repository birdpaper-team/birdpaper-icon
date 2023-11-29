import type { App } from 'vue';
import _IconRobotOne from './icon-robot-one.vue';

const IconRobotOne = Object.assign(_IconRobotOne, {
  install: (app: App) => {
    app.component(_IconRobotOne.name, _IconRobotOne);
  }
});

export default IconRobotOne;