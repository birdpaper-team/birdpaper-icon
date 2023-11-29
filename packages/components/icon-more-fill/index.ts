import type { App } from 'vue';
import _IconMoreFill from './icon-more-fill.vue';

const IconMoreFill = Object.assign(_IconMoreFill, {
  install: (app: App) => {
    app.component(_IconMoreFill.name, _IconMoreFill);
  }
});

export default IconMoreFill;