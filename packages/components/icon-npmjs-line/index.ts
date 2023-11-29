import type { App } from 'vue';
import _IconNpmjsLine from './icon-npmjs-line.vue';

const IconNpmjsLine = Object.assign(_IconNpmjsLine, {
  install: (app: App) => {
    app.component(_IconNpmjsLine.name, _IconNpmjsLine);
  }
});

export default IconNpmjsLine;