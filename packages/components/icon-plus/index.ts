import type { App } from 'vue';
import _IconPlus from './icon-plus.vue';

const IconPlus = Object.assign(_IconPlus, {
  install: (app: App) => {
    app.component(_IconPlus.name, _IconPlus);
  }
});

export default IconPlus;