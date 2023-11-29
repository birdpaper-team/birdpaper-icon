import type { App } from 'vue';
import _IconScreenshot2Fill from './icon-screenshot-2-fill.vue';

const IconScreenshot2Fill = Object.assign(_IconScreenshot2Fill, {
  install: (app: App) => {
    app.component(_IconScreenshot2Fill.name, _IconScreenshot2Fill);
  }
});

export default IconScreenshot2Fill;