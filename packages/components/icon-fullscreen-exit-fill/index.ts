import type { App } from 'vue';
import _IconFullscreenExitFill from './icon-fullscreen-exit-fill.vue';

const IconFullscreenExitFill = Object.assign(_IconFullscreenExitFill, {
  install: (app: App) => {
    app.component(_IconFullscreenExitFill.name, _IconFullscreenExitFill);
  }
});

export default IconFullscreenExitFill;