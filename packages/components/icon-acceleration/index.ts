import type { App } from 'vue';
import _IconAcceleration from './icon-acceleration.vue';

const IconAcceleration = Object.assign(_IconAcceleration, {
  install: (app: App) => {
    app.component(_IconAcceleration.name, _IconAcceleration);
  }
});

export default IconAcceleration;