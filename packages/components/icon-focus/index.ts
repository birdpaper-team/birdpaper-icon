import type { App } from 'vue';
import _IconFocus from './icon-focus.vue';

const IconFocus = Object.assign(_IconFocus, {
  install: (app: App) => {
    app.component(_IconFocus.name, _IconFocus);
  }
});

export default IconFocus;