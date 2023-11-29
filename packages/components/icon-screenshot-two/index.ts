import type { App } from 'vue';
import _IconScreenshotTwo from './icon-screenshot-two.vue';

const IconScreenshotTwo = Object.assign(_IconScreenshotTwo, {
  install: (app: App) => {
    app.component(_IconScreenshotTwo.name, _IconScreenshotTwo);
  }
});

export default IconScreenshotTwo;