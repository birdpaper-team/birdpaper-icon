import type { App } from 'vue';
import _IconMemory from './icon-memory.vue';

const IconMemory = Object.assign(_IconMemory, {
  install: (app: App) => {
    app.component(_IconMemory.name, _IconMemory);
  }
});

export default IconMemory;