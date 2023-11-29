import type { App } from 'vue';
import _IconPointOut from './icon-point-out.vue';

const IconPointOut = Object.assign(_IconPointOut, {
  install: (app: App) => {
    app.component(_IconPointOut.name, _IconPointOut);
  }
});

export default IconPointOut;