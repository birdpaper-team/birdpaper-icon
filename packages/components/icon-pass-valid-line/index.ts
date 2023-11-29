import type { App } from 'vue';
import _IconPassValidLine from './icon-pass-valid-line.vue';

const IconPassValidLine = Object.assign(_IconPassValidLine, {
  install: (app: App) => {
    app.component(_IconPassValidLine.name, _IconPassValidLine);
  }
});

export default IconPassValidLine;