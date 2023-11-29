import type { App } from 'vue';
import _IconArchery from './icon-archery.vue';

const IconArchery = Object.assign(_IconArchery, {
  install: (app: App) => {
    app.component(_IconArchery.name, _IconArchery);
  }
});

export default IconArchery;