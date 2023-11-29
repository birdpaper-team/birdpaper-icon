import type { App } from 'vue';
import _IconLinkedinLine from './icon-linkedin-line.vue';

const IconLinkedinLine = Object.assign(_IconLinkedinLine, {
  install: (app: App) => {
    app.component(_IconLinkedinLine.name, _IconLinkedinLine);
  }
});

export default IconLinkedinLine;