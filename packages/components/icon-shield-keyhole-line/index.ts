import type { App } from 'vue';
import _IconShieldKeyholeLine from './icon-shield-keyhole-line.vue';

const IconShieldKeyholeLine = Object.assign(_IconShieldKeyholeLine, {
  install: (app: App) => {
    app.component(_IconShieldKeyholeLine.name, _IconShieldKeyholeLine);
  }
});

export default IconShieldKeyholeLine;