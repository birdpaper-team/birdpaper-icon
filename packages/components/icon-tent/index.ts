import type { App } from 'vue';
import _IconTent from './icon-tent.vue';

const IconTent = Object.assign(_IconTent, {
  install: (app: App) => {
    app.component(_IconTent.name, _IconTent);
  }
});

export default IconTent;