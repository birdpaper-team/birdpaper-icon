import type { App } from 'vue';
import _IconFileSettingsFill from './icon-file-settings-fill.vue';

const IconFileSettingsFill = Object.assign(_IconFileSettingsFill, {
  install: (app: App) => {
    app.component(_IconFileSettingsFill.name, _IconFileSettingsFill);
  }
});

export default IconFileSettingsFill;