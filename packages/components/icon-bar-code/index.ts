import type { App } from 'vue';
import _IconBarCode from './icon-bar-code.vue';

const IconBarCode = Object.assign(_IconBarCode, {
  install: (app: App) => {
    app.component(_IconBarCode.name, _IconBarCode);
  }
});

export default IconBarCode;