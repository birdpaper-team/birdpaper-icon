import type { App } from 'vue';
import _IconToTopOne from './icon-to-top-one.vue';

const IconToTopOne = Object.assign(_IconToTopOne, {
  install: (app: App) => {
    app.component(_IconToTopOne.name, _IconToTopOne);
  }
});

export default IconToTopOne;