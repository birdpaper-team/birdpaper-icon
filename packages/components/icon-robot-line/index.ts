import type { App } from 'vue';
import _IconRobotLine from './icon-robot-line.vue';

const IconRobotLine = Object.assign(_IconRobotLine, {
  install: (app: App) => {
    app.component(_IconRobotLine.name, _IconRobotLine);
  }
});

export default IconRobotLine;