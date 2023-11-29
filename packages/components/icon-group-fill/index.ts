import type { App } from 'vue';
import _IconGroupFill from './icon-group-fill.vue';

const IconGroupFill = Object.assign(_IconGroupFill, {
  install: (app: App) => {
    app.component(_IconGroupFill.name, _IconGroupFill);
  }
});

export default IconGroupFill;