import type { App } from 'vue';
import _IconHazeFill from './icon-haze-fill.vue';

const IconHazeFill = Object.assign(_IconHazeFill, {
  install: (app: App) => {
    app.component(_IconHazeFill.name, _IconHazeFill);
  }
});

export default IconHazeFill;