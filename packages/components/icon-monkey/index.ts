import type { App } from 'vue';
import _IconMonkey from './icon-monkey.vue';

const IconMonkey = Object.assign(_IconMonkey, {
  install: (app: App) => {
    app.component(_IconMonkey.name, _IconMonkey);
  }
});

export default IconMonkey;