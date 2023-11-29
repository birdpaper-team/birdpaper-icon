import type { App } from 'vue';
import _IconShieldFlashFill from './icon-shield-flash-fill.vue';

const IconShieldFlashFill = Object.assign(_IconShieldFlashFill, {
  install: (app: App) => {
    app.component(_IconShieldFlashFill.name, _IconShieldFlashFill);
  }
});

export default IconShieldFlashFill;