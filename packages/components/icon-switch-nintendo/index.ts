import type { App } from 'vue';
import _IconSwitchNintendo from './icon-switch-nintendo.vue';

const IconSwitchNintendo = Object.assign(_IconSwitchNintendo, {
  install: (app: App) => {
    app.component(_IconSwitchNintendo.name, _IconSwitchNintendo);
  }
});

export default IconSwitchNintendo;