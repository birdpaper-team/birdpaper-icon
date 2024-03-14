import type { App } from 'vue';
import _IconArrowLeftWideFill from './icon-arrow-left-wide-fill.vue';

const IconArrowLeftWideFill = Object.assign(_IconArrowLeftWideFill, {
  install: (app: App) => {
    app.component(_IconArrowLeftWideFill.name, _IconArrowLeftWideFill);
  }
});

export default IconArrowLeftWideFill;