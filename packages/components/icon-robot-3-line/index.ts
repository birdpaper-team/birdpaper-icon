import type { App } from 'vue';
import _IconRobot3Line from './icon-robot-3-line.vue';

const IconRobot3Line = Object.assign(_IconRobot3Line, {
  install: (app: App) => {
    app.component(_IconRobot3Line.name, _IconRobot3Line);
  }
});

export default IconRobot3Line;