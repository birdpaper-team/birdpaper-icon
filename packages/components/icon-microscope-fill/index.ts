import type { App } from 'vue';
import _IconMicroscopeFill from './icon-microscope-fill.vue';

const IconMicroscopeFill = Object.assign(_IconMicroscopeFill, {
  install: (app: App) => {
    app.component(_IconMicroscopeFill.name, _IconMicroscopeFill);
  }
});

export default IconMicroscopeFill;