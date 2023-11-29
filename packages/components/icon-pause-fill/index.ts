import type { App } from 'vue';
import _IconPauseFill from './icon-pause-fill.vue';

const IconPauseFill = Object.assign(_IconPauseFill, {
  install: (app: App) => {
    app.component(_IconPauseFill.name, _IconPauseFill);
  }
});

export default IconPauseFill;