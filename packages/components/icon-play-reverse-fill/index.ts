import type { App } from 'vue';
import _IconPlayReverseFill from './icon-play-reverse-fill.vue';

const IconPlayReverseFill = Object.assign(_IconPlayReverseFill, {
  install: (app: App) => {
    app.component(_IconPlayReverseFill.name, _IconPlayReverseFill);
  }
});

export default IconPlayReverseFill;