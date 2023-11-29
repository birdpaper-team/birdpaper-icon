import type { App } from 'vue';
import _IconSkipRightFill from './icon-skip-right-fill.vue';

const IconSkipRightFill = Object.assign(_IconSkipRightFill, {
  install: (app: App) => {
    app.component(_IconSkipRightFill.name, _IconSkipRightFill);
  }
});

export default IconSkipRightFill;