import type { App } from 'vue';
import _IconNotionFill from './icon-notion-fill.vue';

const IconNotionFill = Object.assign(_IconNotionFill, {
  install: (app: App) => {
    app.component(_IconNotionFill.name, _IconNotionFill);
  }
});

export default IconNotionFill;