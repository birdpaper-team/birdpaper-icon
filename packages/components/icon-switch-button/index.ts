import type { App } from 'vue';
import _IconSwitchButton from './icon-switch-button.vue';

const IconSwitchButton = Object.assign(_IconSwitchButton, {
  install: (app: App) => {
    app.component(_IconSwitchButton.name, _IconSwitchButton);
  }
});

export default IconSwitchButton;