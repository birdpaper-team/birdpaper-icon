import type { App } from 'vue';
import _IconRewindFill from './icon-rewind-fill.vue';

const IconRewindFill = Object.assign(_IconRewindFill, {
  install: (app: App) => {
    app.component(_IconRewindFill.name, _IconRewindFill);
  }
});

export default IconRewindFill;