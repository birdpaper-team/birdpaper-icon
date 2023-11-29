import type { App } from 'vue';
import _IconOutletLine from './icon-outlet-line.vue';

const IconOutletLine = Object.assign(_IconOutletLine, {
  install: (app: App) => {
    app.component(_IconOutletLine.name, _IconOutletLine);
  }
});

export default IconOutletLine;