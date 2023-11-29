import type { App } from 'vue';
import _IconPentagonFill from './icon-pentagon-fill.vue';

const IconPentagonFill = Object.assign(_IconPentagonFill, {
  install: (app: App) => {
    app.component(_IconPentagonFill.name, _IconPentagonFill);
  }
});

export default IconPentagonFill;