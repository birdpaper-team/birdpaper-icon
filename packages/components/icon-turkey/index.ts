import type { App } from 'vue';
import _IconTurkey from './icon-turkey.vue';

const IconTurkey = Object.assign(_IconTurkey, {
  install: (app: App) => {
    app.component(_IconTurkey.name, _IconTurkey);
  }
});

export default IconTurkey;