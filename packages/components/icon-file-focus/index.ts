import type { App } from 'vue';
import _IconFileFocus from './icon-file-focus.vue';

const IconFileFocus = Object.assign(_IconFileFocus, {
  install: (app: App) => {
    app.component(_IconFileFocus.name, _IconFileFocus);
  }
});

export default IconFileFocus;