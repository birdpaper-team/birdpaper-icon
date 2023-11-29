import type { App } from 'vue';
import _IconLayoutColumnFill from './icon-layout-column-fill.vue';

const IconLayoutColumnFill = Object.assign(_IconLayoutColumnFill, {
  install: (app: App) => {
    app.component(_IconLayoutColumnFill.name, _IconLayoutColumnFill);
  }
});

export default IconLayoutColumnFill;