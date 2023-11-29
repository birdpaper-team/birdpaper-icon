import type { App } from 'vue';
import _IconArrowUpCircleFill from './icon-arrow-up-circle-fill.vue';

const IconArrowUpCircleFill = Object.assign(_IconArrowUpCircleFill, {
  install: (app: App) => {
    app.component(_IconArrowUpCircleFill.name, _IconArrowUpCircleFill);
  }
});

export default IconArrowUpCircleFill;