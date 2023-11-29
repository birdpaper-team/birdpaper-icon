import type { App } from 'vue';
import _IconAtSign from './icon-at-sign.vue';

const IconAtSign = Object.assign(_IconAtSign, {
  install: (app: App) => {
    app.component(_IconAtSign.name, _IconAtSign);
  }
});

export default IconAtSign;