import type { App } from 'vue';
import _IconTableAltFill from './icon-table-alt-fill.vue';

const IconTableAltFill = Object.assign(_IconTableAltFill, {
  install: (app: App) => {
    app.component(_IconTableAltFill.name, _IconTableAltFill);
  }
});

export default IconTableAltFill;