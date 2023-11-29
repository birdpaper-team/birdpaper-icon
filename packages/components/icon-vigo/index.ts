import type { App } from 'vue';
import _IconVigo from './icon-vigo.vue';

const IconVigo = Object.assign(_IconVigo, {
  install: (app: App) => {
    app.component(_IconVigo.name, _IconVigo);
  }
});

export default IconVigo;