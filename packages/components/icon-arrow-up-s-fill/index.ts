import type { App } from 'vue';
import _IconArrowUpSFill from './icon-arrow-up-s-fill.vue';

const IconArrowUpSFill = Object.assign(_IconArrowUpSFill, {
  install: (app: App) => {
    app.component(_IconArrowUpSFill.name, _IconArrowUpSFill);
  }
});

export default IconArrowUpSFill;