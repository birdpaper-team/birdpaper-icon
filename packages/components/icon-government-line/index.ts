import type { App } from 'vue';
import _IconGovernmentLine from './icon-government-line.vue';

const IconGovernmentLine = Object.assign(_IconGovernmentLine, {
  install: (app: App) => {
    app.component(_IconGovernmentLine.name, _IconGovernmentLine);
  }
});

export default IconGovernmentLine;