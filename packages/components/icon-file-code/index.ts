import type { App } from 'vue';
import _IconFileCode from './icon-file-code.vue';

const IconFileCode = Object.assign(_IconFileCode, {
  install: (app: App) => {
    app.component(_IconFileCode.name, _IconFileCode);
  }
});

export default IconFileCode;