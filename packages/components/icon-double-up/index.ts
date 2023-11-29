import type { App } from 'vue';
import _IconDoubleUp from './icon-double-up.vue';

const IconDoubleUp = Object.assign(_IconDoubleUp, {
  install: (app: App) => {
    app.component(_IconDoubleUp.name, _IconDoubleUp);
  }
});

export default IconDoubleUp;