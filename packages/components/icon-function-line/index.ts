import type { App } from 'vue';
import _IconFunctionLine from './icon-function-line.vue';

const IconFunctionLine = Object.assign(_IconFunctionLine, {
  install: (app: App) => {
    app.component(_IconFunctionLine.name, _IconFunctionLine);
  }
});

export default IconFunctionLine;