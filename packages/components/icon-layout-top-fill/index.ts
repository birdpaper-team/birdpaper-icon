import type { App } from 'vue';
import _IconLayoutTopFill from './icon-layout-top-fill.vue';

const IconLayoutTopFill = Object.assign(_IconLayoutTopFill, {
  install: (app: App) => {
    app.component(_IconLayoutTopFill.name, _IconLayoutTopFill);
  }
});

export default IconLayoutTopFill;