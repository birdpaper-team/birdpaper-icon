import type { App } from 'vue';
import _IconSpeed from './icon-speed.vue';

const IconSpeed = Object.assign(_IconSpeed, {
  install: (app: App) => {
    app.component(_IconSpeed.name, _IconSpeed);
  }
});

export default IconSpeed;