import type { App } from 'vue';
import _IconArrowDownWideFill from './icon-arrow-down-wide-fill.vue';

const IconArrowDownWideFill = Object.assign(_IconArrowDownWideFill, {
  install: (app: App) => {
    app.component(_IconArrowDownWideFill.name, _IconArrowDownWideFill);
  }
});

export default IconArrowDownWideFill;