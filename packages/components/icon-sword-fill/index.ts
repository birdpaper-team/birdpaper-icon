import type { App } from 'vue';
import _IconSwordFill from './icon-sword-fill.vue';

const IconSwordFill = Object.assign(_IconSwordFill, {
  install: (app: App) => {
    app.component(_IconSwordFill.name, _IconSwordFill);
  }
});

export default IconSwordFill;