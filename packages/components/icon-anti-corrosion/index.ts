import type { App } from 'vue';
import _IconAntiCorrosion from './icon-anti-corrosion.vue';

const IconAntiCorrosion = Object.assign(_IconAntiCorrosion, {
  install: (app: App) => {
    app.component(_IconAntiCorrosion.name, _IconAntiCorrosion);
  }
});

export default IconAntiCorrosion;