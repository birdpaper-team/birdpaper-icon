import type { App } from 'vue';
import _IconReceive from './icon-receive.vue';

const IconReceive = Object.assign(_IconReceive, {
  install: (app: App) => {
    app.component(_IconReceive.name, _IconReceive);
  }
});

export default IconReceive;