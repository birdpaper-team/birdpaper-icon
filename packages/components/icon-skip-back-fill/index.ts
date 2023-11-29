import type { App } from 'vue';
import _IconSkipBackFill from './icon-skip-back-fill.vue';

const IconSkipBackFill = Object.assign(_IconSkipBackFill, {
  install: (app: App) => {
    app.component(_IconSkipBackFill.name, _IconSkipBackFill);
  }
});

export default IconSkipBackFill;