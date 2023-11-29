import type { App } from 'vue';
import _IconDeleteMode from './icon-delete-mode.vue';

const IconDeleteMode = Object.assign(_IconDeleteMode, {
  install: (app: App) => {
    app.component(_IconDeleteMode.name, _IconDeleteMode);
  }
});

export default IconDeleteMode;