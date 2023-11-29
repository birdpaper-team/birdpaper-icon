import type { App } from 'vue';
import _IconCloseRemind from './icon-close-remind.vue';

const IconCloseRemind = Object.assign(_IconCloseRemind, {
  install: (app: App) => {
    app.component(_IconCloseRemind.name, _IconCloseRemind);
  }
});

export default IconCloseRemind;