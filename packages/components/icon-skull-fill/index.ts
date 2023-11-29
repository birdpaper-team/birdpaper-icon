import type { App } from 'vue';
import _IconSkullFill from './icon-skull-fill.vue';

const IconSkullFill = Object.assign(_IconSkullFill, {
  install: (app: App) => {
    app.component(_IconSkullFill.name, _IconSkullFill);
  }
});

export default IconSkullFill;