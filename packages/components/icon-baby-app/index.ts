import type { App } from 'vue';
import _IconBabyApp from './icon-baby-app.vue';

const IconBabyApp = Object.assign(_IconBabyApp, {
  install: (app: App) => {
    app.component(_IconBabyApp.name, _IconBabyApp);
  }
});

export default IconBabyApp;