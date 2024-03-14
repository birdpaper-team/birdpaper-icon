import type { App } from 'vue';
import _IconFunctionAddLine from './icon-function-add-line.vue';

const IconFunctionAddLine = Object.assign(_IconFunctionAddLine, {
  install: (app: App) => {
    app.component(_IconFunctionAddLine.name, _IconFunctionAddLine);
  }
});

export default IconFunctionAddLine;