import type { App } from 'vue';
import _IconApplication from './icon-application.vue';

const IconApplication = Object.assign(_IconApplication, {
  install: (app: App) => {
    app.component(_IconApplication.name, _IconApplication);
  }
});

export default IconApplication;