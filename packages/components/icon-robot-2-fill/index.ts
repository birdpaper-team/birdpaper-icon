import type { App } from 'vue';
import _IconRobot2Fill from './icon-robot-2-fill.vue';

const IconRobot2Fill = Object.assign(_IconRobot2Fill, {
  install: (app: App) => {
    app.component(_IconRobot2Fill.name, _IconRobot2Fill);
  }
});

export default IconRobot2Fill;