import type { App } from 'vue';
import _IconCode from './icon-code.vue';

const IconCode = Object.assign(_IconCode, {
  install: (app: App) => {
    app.component(_IconCode.name, _IconCode);
  }
});

export default IconCode;