import type { App } from 'vue';
import _IconClose from './icon-close.vue';

const IconClose = Object.assign(_IconClose, {
  install: (app: App) => {
    app.component(_IconClose.name, _IconClose);
  }
});

export default IconClose;