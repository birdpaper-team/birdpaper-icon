import type { App } from 'vue';
import _IconDataAll from './icon-data-all.vue';

const IconDataAll = Object.assign(_IconDataAll, {
  install: (app: App) => {
    app.component(_IconDataAll.name, _IconDataAll);
  }
});

export default IconDataAll;