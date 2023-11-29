import type { App } from 'vue';
import _IconPoundSign from './icon-pound-sign.vue';

const IconPoundSign = Object.assign(_IconPoundSign, {
  install: (app: App) => {
    app.component(_IconPoundSign.name, _IconPoundSign);
  }
});

export default IconPoundSign;