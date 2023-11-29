import type { App } from 'vue';
import _IconScreenshotLine from './icon-screenshot-line.vue';

const IconScreenshotLine = Object.assign(_IconScreenshotLine, {
  install: (app: App) => {
    app.component(_IconScreenshotLine.name, _IconScreenshotLine);
  }
});

export default IconScreenshotLine;