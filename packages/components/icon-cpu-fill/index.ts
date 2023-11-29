import type { App } from 'vue';
import _IconCpuFill from './icon-cpu-fill.vue';

const IconCpuFill = Object.assign(_IconCpuFill, {
  install: (app: App) => {
    app.component(_IconCpuFill.name, _IconCpuFill);
  }
});

export default IconCpuFill;