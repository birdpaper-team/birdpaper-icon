import type { App } from 'vue';
import _IconArrowDownCircleFill from './icon-arrow-down-circle-fill.vue';

const IconArrowDownCircleFill = Object.assign(_IconArrowDownCircleFill, {
  install: (app: App) => {
    app.component(_IconArrowDownCircleFill.name, _IconArrowDownCircleFill);
  }
});

export default IconArrowDownCircleFill;