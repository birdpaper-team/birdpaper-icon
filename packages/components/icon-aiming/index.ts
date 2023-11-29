import type { App } from 'vue';
import _IconAiming from './icon-aiming.vue';

const IconAiming = Object.assign(_IconAiming, {
  install: (app: App) => {
    app.component(_IconAiming.name, _IconAiming);
  }
});

export default IconAiming;