import type { App } from 'vue';
import _IconCircleRightUp from './icon-circle-right-up.vue';

const IconCircleRightUp = Object.assign(_IconCircleRightUp, {
  install: (app: App) => {
    app.component(_IconCircleRightUp.name, _IconCircleRightUp);
  }
});

export default IconCircleRightUp;