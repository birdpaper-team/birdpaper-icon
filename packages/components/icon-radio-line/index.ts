import type { App } from 'vue';
import _IconRadioLine from './icon-radio-line.vue';

const IconRadioLine = Object.assign(_IconRadioLine, {
  install: (app: App) => {
    app.component(_IconRadioLine.name, _IconRadioLine);
  }
});

export default IconRadioLine;