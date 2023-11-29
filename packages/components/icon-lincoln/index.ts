import type { App } from 'vue';
import _IconLincoln from './icon-lincoln.vue';

const IconLincoln = Object.assign(_IconLincoln, {
  install: (app: App) => {
    app.component(_IconLincoln.name, _IconLincoln);
  }
});

export default IconLincoln;