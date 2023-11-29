import type { App } from 'vue';
import _IconTrademark from './icon-trademark.vue';

const IconTrademark = Object.assign(_IconTrademark, {
  install: (app: App) => {
    app.component(_IconTrademark.name, _IconTrademark);
  }
});

export default IconTrademark;