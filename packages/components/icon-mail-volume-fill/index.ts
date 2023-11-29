import type { App } from 'vue';
import _IconMailVolumeFill from './icon-mail-volume-fill.vue';

const IconMailVolumeFill = Object.assign(_IconMailVolumeFill, {
  install: (app: App) => {
    app.component(_IconMailVolumeFill.name, _IconMailVolumeFill);
  }
});

export default IconMailVolumeFill;