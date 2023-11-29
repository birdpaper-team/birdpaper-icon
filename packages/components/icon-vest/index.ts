import type { App } from 'vue';
import _IconVest from './icon-vest.vue';

const IconVest = Object.assign(_IconVest, {
  install: (app: App) => {
    app.component(_IconVest.name, _IconVest);
  }
});

export default IconVest;