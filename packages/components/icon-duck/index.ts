import type { App } from 'vue';
import _IconDuck from './icon-duck.vue';

const IconDuck = Object.assign(_IconDuck, {
  install: (app: App) => {
    app.component(_IconDuck.name, _IconDuck);
  }
});

export default IconDuck;