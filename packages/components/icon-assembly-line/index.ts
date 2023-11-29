import type { App } from 'vue';
import _IconAssemblyLine from './icon-assembly-line.vue';

const IconAssemblyLine = Object.assign(_IconAssemblyLine, {
  install: (app: App) => {
    app.component(_IconAssemblyLine.name, _IconAssemblyLine);
  }
});

export default IconAssemblyLine;