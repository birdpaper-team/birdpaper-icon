import type { App } from 'vue';
import _IconSystem from './icon-system.vue';

const IconSystem = Object.assign(_IconSystem, {
  install: (app: App) => {
    app.component(_IconSystem.name, _IconSystem);
  }
});

export default IconSystem;