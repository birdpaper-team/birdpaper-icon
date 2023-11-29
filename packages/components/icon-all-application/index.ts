import type { App } from 'vue';
import _IconAllApplication from './icon-all-application.vue';

const IconAllApplication = Object.assign(_IconAllApplication, {
  install: (app: App) => {
    app.component(_IconAllApplication.name, _IconAllApplication);
  }
});

export default IconAllApplication;