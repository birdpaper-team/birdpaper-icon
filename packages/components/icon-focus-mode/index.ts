import type { App } from 'vue';
import _IconFocusMode from './icon-focus-mode.vue';

const IconFocusMode = Object.assign(_IconFocusMode, {
  install: (app: App) => {
    app.component(_IconFocusMode.name, _IconFocusMode);
  }
});

export default IconFocusMode;