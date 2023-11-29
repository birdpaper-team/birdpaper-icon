import type { App } from 'vue';
import _IconRotatingForward from './icon-rotating-forward.vue';

const IconRotatingForward = Object.assign(_IconRotatingForward, {
  install: (app: App) => {
    app.component(_IconRotatingForward.name, _IconRotatingForward);
  }
});

export default IconRotatingForward;