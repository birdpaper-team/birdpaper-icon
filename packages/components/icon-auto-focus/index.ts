import type { App } from 'vue';
import _IconAutoFocus from './icon-auto-focus.vue';

const IconAutoFocus = Object.assign(_IconAutoFocus, {
  install: (app: App) => {
    app.component(_IconAutoFocus.name, _IconAutoFocus);
  }
});

export default IconAutoFocus;