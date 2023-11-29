import type { App } from 'vue';
import _IconShieldCheckFill from './icon-shield-check-fill.vue';

const IconShieldCheckFill = Object.assign(_IconShieldCheckFill, {
  install: (app: App) => {
    app.component(_IconShieldCheckFill.name, _IconShieldCheckFill);
  }
});

export default IconShieldCheckFill;