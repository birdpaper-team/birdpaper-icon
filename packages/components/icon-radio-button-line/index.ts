import type { App } from 'vue';
import _IconRadioButtonLine from './icon-radio-button-line.vue';

const IconRadioButtonLine = Object.assign(_IconRadioButtonLine, {
  install: (app: App) => {
    app.component(_IconRadioButtonLine.name, _IconRadioButtonLine);
  }
});

export default IconRadioButtonLine;