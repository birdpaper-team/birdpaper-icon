import type { App } from 'vue';
import _IconLeaves from './icon-leaves.vue';

const IconLeaves = Object.assign(_IconLeaves, {
  install: (app: App) => {
    app.component(_IconLeaves.name, _IconLeaves);
  }
});

export default IconLeaves;