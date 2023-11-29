import type { App } from 'vue';
import _IconRightAngle from './icon-right-angle.vue';

const IconRightAngle = Object.assign(_IconRightAngle, {
  install: (app: App) => {
    app.component(_IconRightAngle.name, _IconRightAngle);
  }
});

export default IconRightAngle;