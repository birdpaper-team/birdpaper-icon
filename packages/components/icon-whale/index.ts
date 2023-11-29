import type { App } from 'vue';
import _IconWhale from './icon-whale.vue';

const IconWhale = Object.assign(_IconWhale, {
  install: (app: App) => {
    app.component(_IconWhale.name, _IconWhale);
  }
});

export default IconWhale;