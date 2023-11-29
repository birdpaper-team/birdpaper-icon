import type { App } from 'vue';
import _IconConnect from './icon-connect.vue';

const IconConnect = Object.assign(_IconConnect, {
  install: (app: App) => {
    app.component(_IconConnect.name, _IconConnect);
  }
});

export default IconConnect;