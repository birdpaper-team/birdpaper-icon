import type { App } from 'vue';
import _IconToTop from './icon-to-top.vue';

const IconToTop = Object.assign(_IconToTop, {
  install: (app: App) => {
    app.component(_IconToTop.name, _IconToTop);
  }
});

export default IconToTop;