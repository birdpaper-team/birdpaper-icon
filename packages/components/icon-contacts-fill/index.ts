import type { App } from 'vue';
import _IconContactsFill from './icon-contacts-fill.vue';

const IconContactsFill = Object.assign(_IconContactsFill, {
  install: (app: App) => {
    app.component(_IconContactsFill.name, _IconContactsFill);
  }
});

export default IconContactsFill;