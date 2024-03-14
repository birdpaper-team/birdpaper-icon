import type { App } from 'vue';
import _IconStopLargeFill from './icon-stop-large-fill.vue';

const IconStopLargeFill = Object.assign(_IconStopLargeFill, {
  install: (app: App) => {
    app.component(_IconStopLargeFill.name, _IconStopLargeFill);
  }
});

export default IconStopLargeFill;