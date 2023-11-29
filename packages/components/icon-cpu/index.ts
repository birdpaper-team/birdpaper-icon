import type { App } from 'vue';
import _IconCpu from './icon-cpu.vue';

const IconCpu = Object.assign(_IconCpu, {
  install: (app: App) => {
    app.component(_IconCpu.name, _IconCpu);
  }
});

export default IconCpu;