import type { App } from 'vue';
import _IconRobot3Fill from './icon-robot-3-fill.vue';

const IconRobot3Fill = Object.assign(_IconRobot3Fill, {
  install: (app: App) => {
    app.component(_IconRobot3Fill.name, _IconRobot3Fill);
  }
});

export default IconRobot3Fill;