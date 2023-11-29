import type { App } from 'vue';
import _IconScreenshotFill from './icon-screenshot-fill.vue';

const IconScreenshotFill = Object.assign(_IconScreenshotFill, {
  install: (app: App) => {
    app.component(_IconScreenshotFill.name, _IconScreenshotFill);
  }
});

export default IconScreenshotFill;