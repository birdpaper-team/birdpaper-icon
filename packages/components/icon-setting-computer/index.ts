import type { App } from 'vue';
import _IconSettingComputer from './icon-setting-computer.vue';

const IconSettingComputer = Object.assign(_IconSettingComputer, {
  install: (app: App) => {
    app.component(_IconSettingComputer.name, _IconSettingComputer);
  }
});

export default IconSettingComputer;