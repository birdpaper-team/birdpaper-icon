import type { App } from 'vue';
import _IconYuqueFill from './icon-yuque-fill.vue';

const IconYuqueFill = Object.assign(_IconYuqueFill, {
  install: (app: App) => {
    app.component(_IconYuqueFill.name, _IconYuqueFill);
  }
});

export default IconYuqueFill;