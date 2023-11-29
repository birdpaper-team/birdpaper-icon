import type { App } from 'vue';
import _IconPlaystationLine from './icon-playstation-line.vue';

const IconPlaystationLine = Object.assign(_IconPlaystationLine, {
  install: (app: App) => {
    app.component(_IconPlaystationLine.name, _IconPlaystationLine);
  }
});

export default IconPlaystationLine;