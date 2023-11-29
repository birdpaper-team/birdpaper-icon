import type { App } from 'vue';
import _IconHandSanitizerLine from './icon-hand-sanitizer-line.vue';

const IconHandSanitizerLine = Object.assign(_IconHandSanitizerLine, {
  install: (app: App) => {
    app.component(_IconHandSanitizerLine.name, _IconHandSanitizerLine);
  }
});

export default IconHandSanitizerLine;