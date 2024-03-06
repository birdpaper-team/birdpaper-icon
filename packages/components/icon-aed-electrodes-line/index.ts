import type { App } from 'vue';
import _IconAedElectrodesLine from './icon-aed-electrodes-line.vue';

const IconAedElectrodesLine = Object.assign(_IconAedElectrodesLine, {
  install: (app: App) => {
    app.component(_IconAedElectrodesLine.name, _IconAedElectrodesLine);
  }
});

export default IconAedElectrodesLine;