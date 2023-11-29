import type { App } from 'vue';
import _IconShieldUserFill from './icon-shield-user-fill.vue';

const IconShieldUserFill = Object.assign(_IconShieldUserFill, {
  install: (app: App) => {
    app.component(_IconShieldUserFill.name, _IconShieldUserFill);
  }
});

export default IconShieldUserFill;