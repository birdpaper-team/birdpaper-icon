import type { App } from 'vue';
import _IconClosedCaptioningFill from './icon-closed-captioning-fill.vue';

const IconClosedCaptioningFill = Object.assign(_IconClosedCaptioningFill, {
  install: (app: App) => {
    app.component(_IconClosedCaptioningFill.name, _IconClosedCaptioningFill);
  }
});

export default IconClosedCaptioningFill;