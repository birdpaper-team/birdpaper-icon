import type { App } from 'vue';
import _IconSwitchFill from './icon-switch-fill.vue';

const IconSwitchFill = Object.assign(_IconSwitchFill, {
  install: (app: App) => {
    app.component(_IconSwitchFill.name, _IconSwitchFill);
  }
});

export default IconSwitchFill;