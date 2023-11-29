import type { App } from 'vue';
import _IconMotorbikeFill from './icon-motorbike-fill.vue';

const IconMotorbikeFill = Object.assign(_IconMotorbikeFill, {
  install: (app: App) => {
    app.component(_IconMotorbikeFill.name, _IconMotorbikeFill);
  }
});

export default IconMotorbikeFill;