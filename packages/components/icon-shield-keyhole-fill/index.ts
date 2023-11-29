import type { App } from 'vue';
import _IconShieldKeyholeFill from './icon-shield-keyhole-fill.vue';

const IconShieldKeyholeFill = Object.assign(_IconShieldKeyholeFill, {
  install: (app: App) => {
    app.component(_IconShieldKeyholeFill.name, _IconShieldKeyholeFill);
  }
});

export default IconShieldKeyholeFill;