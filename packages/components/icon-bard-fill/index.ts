import type { App } from 'vue';
import _IconBardFill from './icon-bard-fill.vue';

const IconBardFill = Object.assign(_IconBardFill, {
  install: (app: App) => {
    app.component(_IconBardFill.name, _IconBardFill);
  }
});

export default IconBardFill;