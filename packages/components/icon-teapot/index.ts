import type { App } from 'vue';
import _IconTeapot from './icon-teapot.vue';

const IconTeapot = Object.assign(_IconTeapot, {
  install: (app: App) => {
    app.component(_IconTeapot.name, _IconTeapot);
  }
});

export default IconTeapot;