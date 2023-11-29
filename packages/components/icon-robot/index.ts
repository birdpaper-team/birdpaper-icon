import type { App } from 'vue';
import _IconRobot from './icon-robot.vue';

const IconRobot = Object.assign(_IconRobot, {
  install: (app: App) => {
    app.component(_IconRobot.name, _IconRobot);
  }
});

export default IconRobot;