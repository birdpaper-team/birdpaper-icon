import type { App } from 'vue';
import _IconTableLamp from './icon-table-lamp.vue';

const IconTableLamp = Object.assign(_IconTableLamp, {
  install: (app: App) => {
    app.component(_IconTableLamp.name, _IconTableLamp);
  }
});

export default IconTableLamp;