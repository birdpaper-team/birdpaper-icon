import type { App } from 'vue';
import _IconShutDownFill from './icon-shut-down-fill.vue';

const IconShutDownFill = Object.assign(_IconShutDownFill, {
  install: (app: App) => {
    app.component(_IconShutDownFill.name, _IconShutDownFill);
  }
});

export default IconShutDownFill;