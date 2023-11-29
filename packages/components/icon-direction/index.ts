import type { App } from 'vue';
import _IconDirection from './icon-direction.vue';

const IconDirection = Object.assign(_IconDirection, {
  install: (app: App) => {
    app.component(_IconDirection.name, _IconDirection);
  }
});

export default IconDirection;