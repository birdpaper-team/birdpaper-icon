import type { App } from 'vue';
import _IconHandSanitizerFill from './icon-hand-sanitizer-fill.vue';

const IconHandSanitizerFill = Object.assign(_IconHandSanitizerFill, {
  install: (app: App) => {
    app.component(_IconHandSanitizerFill.name, _IconHandSanitizerFill);
  }
});

export default IconHandSanitizerFill;