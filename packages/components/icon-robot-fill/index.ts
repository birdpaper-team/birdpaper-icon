import type { App } from 'vue';
import _IconRobotFill from './icon-robot-fill.vue';

const IconRobotFill = Object.assign(_IconRobotFill, {
  install: (app: App) => {
    app.component(_IconRobotFill.name, _IconRobotFill);
  }
});

export default IconRobotFill;