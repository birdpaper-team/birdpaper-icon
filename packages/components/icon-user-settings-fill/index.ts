import type { App } from 'vue';
import _IconUserSettingsFill from './icon-user-settings-fill.vue';

const IconUserSettingsFill = Object.assign(_IconUserSettingsFill, {
  install: (app: App) => {
    app.component(_IconUserSettingsFill.name, _IconUserSettingsFill);
  }
});

export default IconUserSettingsFill;