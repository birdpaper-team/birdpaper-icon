import type { App } from 'vue';
import _IconDislikeFill from './icon-dislike-fill.vue';

const IconDislikeFill = Object.assign(_IconDislikeFill, {
  install: (app: App) => {
    app.component(_IconDislikeFill.name, _IconDislikeFill);
  }
});

export default IconDislikeFill;