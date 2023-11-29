import type { App } from 'vue';
import _IconBilibiliFill from './icon-bilibili-fill.vue';

const IconBilibiliFill = Object.assign(_IconBilibiliFill, {
  install: (app: App) => {
    app.component(_IconBilibiliFill.name, _IconBilibiliFill);
  }
});

export default IconBilibiliFill;