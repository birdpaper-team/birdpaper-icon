import type { App } from 'vue';
import _IconScreenshot2Line from './icon-screenshot-2-line.vue';

const IconScreenshot2Line = Object.assign(_IconScreenshot2Line, {
  install: (app: App) => {
    app.component(_IconScreenshot2Line.name, _IconScreenshot2Line);
  }
});

export default IconScreenshot2Line;