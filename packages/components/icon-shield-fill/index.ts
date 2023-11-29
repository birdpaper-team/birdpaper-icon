import type { App } from 'vue';
import _IconShieldFill from './icon-shield-fill.vue';

const IconShieldFill = Object.assign(_IconShieldFill, {
  install: (app: App) => {
    app.component(_IconShieldFill.name, _IconShieldFill);
  }
});

export default IconShieldFill;