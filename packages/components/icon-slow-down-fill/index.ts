import type { App } from 'vue';
import _IconSlowDownFill from './icon-slow-down-fill.vue';

const IconSlowDownFill = Object.assign(_IconSlowDownFill, {
  install: (app: App) => {
    app.component(_IconSlowDownFill.name, _IconSlowDownFill);
  }
});

export default IconSlowDownFill;