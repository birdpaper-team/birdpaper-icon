import type { App } from 'vue';
import _IconLibra from './icon-libra.vue';

const IconLibra = Object.assign(_IconLibra, {
  install: (app: App) => {
    app.component(_IconLibra.name, _IconLibra);
  }
});

export default IconLibra;