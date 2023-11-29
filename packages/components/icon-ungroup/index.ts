import type { App } from 'vue';
import _IconUngroup from './icon-ungroup.vue';

const IconUngroup = Object.assign(_IconUngroup, {
  install: (app: App) => {
    app.component(_IconUngroup.name, _IconUngroup);
  }
});

export default IconUngroup;