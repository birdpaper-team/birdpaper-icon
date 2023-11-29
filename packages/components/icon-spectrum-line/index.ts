import type { App } from 'vue';
import _IconSpectrumLine from './icon-spectrum-line.vue';

const IconSpectrumLine = Object.assign(_IconSpectrumLine, {
  install: (app: App) => {
    app.component(_IconSpectrumLine.name, _IconSpectrumLine);
  }
});

export default IconSpectrumLine;