import type { App } from 'vue';
import _IconKnifeBloodFill from './icon-knife-blood-fill.vue';

const IconKnifeBloodFill = Object.assign(_IconKnifeBloodFill, {
  install: (app: App) => {
    app.component(_IconKnifeBloodFill.name, _IconKnifeBloodFill);
  }
});

export default IconKnifeBloodFill;