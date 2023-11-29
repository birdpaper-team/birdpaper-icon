import type { App } from 'vue';
import _IconSkipUpFill from './icon-skip-up-fill.vue';

const IconSkipUpFill = Object.assign(_IconSkipUpFill, {
  install: (app: App) => {
    app.component(_IconSkipUpFill.name, _IconSkipUpFill);
  }
});

export default IconSkipUpFill;