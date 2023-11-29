import type { App } from 'vue';
import _IconOpenArmLine from './icon-open-arm-line.vue';

const IconOpenArmLine = Object.assign(_IconOpenArmLine, {
  install: (app: App) => {
    app.component(_IconOpenArmLine.name, _IconOpenArmLine);
  }
});

export default IconOpenArmLine;