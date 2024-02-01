import type { App } from 'vue';
import _IconTimeZoneFill from './icon-time-zone-fill.vue';

const IconTimeZoneFill = Object.assign(_IconTimeZoneFill, {
  install: (app: App) => {
    app.component(_IconTimeZoneFill.name, _IconTimeZoneFill);
  }
});

export default IconTimeZoneFill;