import type { App } from 'vue';
import _IconCpuLine from './icon-cpu-line.vue';

const IconCpuLine = Object.assign(_IconCpuLine, {
  install: (app: App) => {
    app.component(_IconCpuLine.name, _IconCpuLine);
  }
});

export default IconCpuLine;