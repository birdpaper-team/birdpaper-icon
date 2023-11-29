import type { App } from 'vue';
import _IconSwitchContrast from './icon-switch-contrast.vue';

const IconSwitchContrast = Object.assign(_IconSwitchContrast, {
  install: (app: App) => {
    app.component(_IconSwitchContrast.name, _IconSwitchContrast);
  }
});

export default IconSwitchContrast;