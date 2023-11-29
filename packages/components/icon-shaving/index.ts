import type { App } from 'vue';
import _IconShaving from './icon-shaving.vue';

const IconShaving = Object.assign(_IconShaving, {
  install: (app: App) => {
    app.component(_IconShaving.name, _IconShaving);
  }
});

export default IconShaving;