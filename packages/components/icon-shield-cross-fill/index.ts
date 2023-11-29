import type { App } from 'vue';
import _IconShieldCrossFill from './icon-shield-cross-fill.vue';

const IconShieldCrossFill = Object.assign(_IconShieldCrossFill, {
  install: (app: App) => {
    app.component(_IconShieldCrossFill.name, _IconShieldCrossFill);
  }
});

export default IconShieldCrossFill;