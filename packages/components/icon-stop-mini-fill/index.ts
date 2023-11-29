import type { App } from 'vue';
import _IconStopMiniFill from './icon-stop-mini-fill.vue';

const IconStopMiniFill = Object.assign(_IconStopMiniFill, {
  install: (app: App) => {
    app.component(_IconStopMiniFill.name, _IconStopMiniFill);
  }
});

export default IconStopMiniFill;