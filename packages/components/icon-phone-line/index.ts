import type { App } from 'vue';
import _IconPhoneLine from './icon-phone-line.vue';

const IconPhoneLine = Object.assign(_IconPhoneLine, {
  install: (app: App) => {
    app.component(_IconPhoneLine.name, _IconPhoneLine);
  }
});

export default IconPhoneLine;