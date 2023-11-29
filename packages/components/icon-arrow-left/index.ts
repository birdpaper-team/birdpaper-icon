import type { App } from 'vue';
import _IconArrowLeft from './icon-arrow-left.vue';

const IconArrowLeft = Object.assign(_IconArrowLeft, {
  install: (app: App) => {
    app.component(_IconArrowLeft.name, _IconArrowLeft);
  }
});

export default IconArrowLeft;