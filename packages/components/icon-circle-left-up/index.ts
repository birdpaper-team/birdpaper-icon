import type { App } from 'vue';
import _IconCircleLeftUp from './icon-circle-left-up.vue';

const IconCircleLeftUp = Object.assign(_IconCircleLeftUp, {
  install: (app: App) => {
    app.component(_IconCircleLeftUp.name, _IconCircleLeftUp);
  }
});

export default IconCircleLeftUp;