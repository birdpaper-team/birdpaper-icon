import type { App } from 'vue';
import _IconShieldStarFill from './icon-shield-star-fill.vue';

const IconShieldStarFill = Object.assign(_IconShieldStarFill, {
  install: (app: App) => {
    app.component(_IconShieldStarFill.name, _IconShieldStarFill);
  }
});

export default IconShieldStarFill;