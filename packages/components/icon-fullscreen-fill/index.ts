import type { App } from 'vue';
import _IconFullscreenFill from './icon-fullscreen-fill.vue';

const IconFullscreenFill = Object.assign(_IconFullscreenFill, {
  install: (app: App) => {
    app.component(_IconFullscreenFill.name, _IconFullscreenFill);
  }
});

export default IconFullscreenFill;