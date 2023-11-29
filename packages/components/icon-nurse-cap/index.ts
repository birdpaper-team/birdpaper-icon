import type { App } from 'vue';
import _IconNurseCap from './icon-nurse-cap.vue';

const IconNurseCap = Object.assign(_IconNurseCap, {
  install: (app: App) => {
    app.component(_IconNurseCap.name, _IconNurseCap);
  }
});

export default IconNurseCap;