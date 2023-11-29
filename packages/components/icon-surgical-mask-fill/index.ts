import type { App } from 'vue';
import _IconSurgicalMaskFill from './icon-surgical-mask-fill.vue';

const IconSurgicalMaskFill = Object.assign(_IconSurgicalMaskFill, {
  install: (app: App) => {
    app.component(_IconSurgicalMaskFill.name, _IconSurgicalMaskFill);
  }
});

export default IconSurgicalMaskFill;