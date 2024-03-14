import type { App } from 'vue';
import _IconNodejsLine from './icon-nodejs-line.vue';

const IconNodejsLine = Object.assign(_IconNodejsLine, {
  install: (app: App) => {
    app.component(_IconNodejsLine.name, _IconNodejsLine);
  }
});

export default IconNodejsLine;