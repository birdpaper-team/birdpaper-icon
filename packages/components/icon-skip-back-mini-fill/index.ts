import type { App } from 'vue';
import _IconSkipBackMiniFill from './icon-skip-back-mini-fill.vue';

const IconSkipBackMiniFill = Object.assign(_IconSkipBackMiniFill, {
  install: (app: App) => {
    app.component(_IconSkipBackMiniFill.name, _IconSkipBackMiniFill);
  }
});

export default IconSkipBackMiniFill;