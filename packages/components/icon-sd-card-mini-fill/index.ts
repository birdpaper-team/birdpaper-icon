import type { App } from 'vue';
import _IconSdCardMiniFill from './icon-sd-card-mini-fill.vue';

const IconSdCardMiniFill = Object.assign(_IconSdCardMiniFill, {
  install: (app: App) => {
    app.component(_IconSdCardMiniFill.name, _IconSdCardMiniFill);
  }
});

export default IconSdCardMiniFill;