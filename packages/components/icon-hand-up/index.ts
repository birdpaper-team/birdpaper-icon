import type { App } from 'vue';
import _IconHandUp from './icon-hand-up.vue';

const IconHandUp = Object.assign(_IconHandUp, {
  install: (app: App) => {
    app.component(_IconHandUp.name, _IconHandUp);
  }
});

export default IconHandUp;