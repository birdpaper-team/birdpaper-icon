import type { App } from 'vue';
import _IconPlayReverseLargeFill from './icon-play-reverse-large-fill.vue';

const IconPlayReverseLargeFill = Object.assign(_IconPlayReverseLargeFill, {
  install: (app: App) => {
    app.component(_IconPlayReverseLargeFill.name, _IconPlayReverseLargeFill);
  }
});

export default IconPlayReverseLargeFill;