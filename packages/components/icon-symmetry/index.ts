import type { App } from 'vue';
import _IconSymmetry from './icon-symmetry.vue';

const IconSymmetry = Object.assign(_IconSymmetry, {
  install: (app: App) => {
    app.component(_IconSymmetry.name, _IconSymmetry);
  }
});

export default IconSymmetry;