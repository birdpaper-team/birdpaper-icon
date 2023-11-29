import type { App } from 'vue';
import _IconApiApp from './icon-api-app.vue';

const IconApiApp = Object.assign(_IconApiApp, {
  install: (app: App) => {
    app.component(_IconApiApp.name, _IconApiApp);
  }
});

export default IconApiApp;