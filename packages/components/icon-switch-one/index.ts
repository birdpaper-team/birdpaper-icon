import type { App } from 'vue';
import _IconSwitchOne from './icon-switch-one.vue';

const IconSwitchOne = Object.assign(_IconSwitchOne, {
  install: (app: App) => {
    app.component(_IconSwitchOne.name, _IconSwitchOne);
  }
});

export default IconSwitchOne;