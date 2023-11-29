import type { App } from 'vue';
import _IconHelmetOne from './icon-helmet-one.vue';

const IconHelmetOne = Object.assign(_IconHelmetOne, {
  install: (app: App) => {
    app.component(_IconHelmetOne.name, _IconHelmetOne);
  }
});

export default IconHelmetOne;