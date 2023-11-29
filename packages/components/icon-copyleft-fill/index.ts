import type { App } from 'vue';
import _IconCopyleftFill from './icon-copyleft-fill.vue';

const IconCopyleftFill = Object.assign(_IconCopyleftFill, {
  install: (app: App) => {
    app.component(_IconCopyleftFill.name, _IconCopyleftFill);
  }
});

export default IconCopyleftFill;