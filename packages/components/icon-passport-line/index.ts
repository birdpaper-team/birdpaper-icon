import type { App } from 'vue';
import _IconPassportLine from './icon-passport-line.vue';

const IconPassportLine = Object.assign(_IconPassportLine, {
  install: (app: App) => {
    app.component(_IconPassportLine.name, _IconPassportLine);
  }
});

export default IconPassportLine;