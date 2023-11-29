import type { App } from 'vue';
import _IconSdCardFill from './icon-sd-card-fill.vue';

const IconSdCardFill = Object.assign(_IconSdCardFill, {
  install: (app: App) => {
    app.component(_IconSdCardFill.name, _IconSdCardFill);
  }
});

export default IconSdCardFill;