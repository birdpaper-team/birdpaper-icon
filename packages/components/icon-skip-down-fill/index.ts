import type { App } from 'vue';
import _IconSkipDownFill from './icon-skip-down-fill.vue';

const IconSkipDownFill = Object.assign(_IconSkipDownFill, {
  install: (app: App) => {
    app.component(_IconSkipDownFill.name, _IconSkipDownFill);
  }
});

export default IconSkipDownFill;