import type { App } from 'vue';
import _IconPayCode from './icon-pay-code.vue';

const IconPayCode = Object.assign(_IconPayCode, {
  install: (app: App) => {
    app.component(_IconPayCode.name, _IconPayCode);
  }
});

export default IconPayCode;