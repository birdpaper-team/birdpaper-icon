import type { App } from 'vue';
import _IconPauseCircleFill from './icon-pause-circle-fill.vue';

const IconPauseCircleFill = Object.assign(_IconPauseCircleFill, {
  install: (app: App) => {
    app.component(_IconPauseCircleFill.name, _IconPauseCircleFill);
  }
});

export default IconPauseCircleFill;