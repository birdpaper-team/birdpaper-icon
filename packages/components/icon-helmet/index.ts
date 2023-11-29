import type { App } from 'vue';
import _IconHelmet from './icon-helmet.vue';

const IconHelmet = Object.assign(_IconHelmet, {
  install: (app: App) => {
    app.component(_IconHelmet.name, _IconHelmet);
  }
});

export default IconHelmet;