import type { App } from 'vue';
import _IconPlayMiniFill from './icon-play-mini-fill.vue';

const IconPlayMiniFill = Object.assign(_IconPlayMiniFill, {
  install: (app: App) => {
    app.component(_IconPlayMiniFill.name, _IconPlayMiniFill);
  }
});

export default IconPlayMiniFill;