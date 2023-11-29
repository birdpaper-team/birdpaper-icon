import type { App } from 'vue';
import _IconSafariFill from './icon-safari-fill.vue';

const IconSafariFill = Object.assign(_IconSafariFill, {
  install: (app: App) => {
    app.component(_IconSafariFill.name, _IconSafariFill);
  }
});

export default IconSafariFill;