import type { App } from 'vue';
import _IconHeartPulseFill from './icon-heart-pulse-fill.vue';

const IconHeartPulseFill = Object.assign(_IconHeartPulseFill, {
  install: (app: App) => {
    app.component(_IconHeartPulseFill.name, _IconHeartPulseFill);
  }
});

export default IconHeartPulseFill;