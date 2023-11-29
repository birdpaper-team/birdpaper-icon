import type { App } from 'vue';
import _IconSettingsFill from './icon-settings-fill.vue';

const IconSettingsFill = Object.assign(_IconSettingsFill, {
  install: (app: App) => {
    app.component(_IconSettingsFill.name, _IconSettingsFill);
  }
});

export default IconSettingsFill;