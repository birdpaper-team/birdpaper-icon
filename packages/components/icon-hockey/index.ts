import type { App } from 'vue';
import _IconHockey from './icon-hockey.vue';

const IconHockey = Object.assign(_IconHockey, {
  install: (app: App) => {
    app.component(_IconHockey.name, _IconHockey);
  }
});

export default IconHockey;