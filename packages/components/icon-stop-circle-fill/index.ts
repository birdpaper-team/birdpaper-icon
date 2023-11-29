import type { App } from 'vue';
import _IconStopCircleFill from './icon-stop-circle-fill.vue';

const IconStopCircleFill = Object.assign(_IconStopCircleFill, {
  install: (app: App) => {
    app.component(_IconStopCircleFill.name, _IconStopCircleFill);
  }
});

export default IconStopCircleFill;