import type { App } from 'vue';
import _IconRobot2Line from './icon-robot-2-line.vue';

const IconRobot2Line = Object.assign(_IconRobot2Line, {
  install: (app: App) => {
    app.component(_IconRobot2Line.name, _IconRobot2Line);
  }
});

export default IconRobot2Line;