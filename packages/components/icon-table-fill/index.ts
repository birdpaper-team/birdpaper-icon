import type { App } from 'vue';
import _IconTableFill from './icon-table-fill.vue';

const IconTableFill = Object.assign(_IconTableFill, {
  install: (app: App) => {
    app.component(_IconTableFill.name, _IconTableFill);
  }
});

export default IconTableFill;