import type { App } from 'vue';
import _IconMailSettingsFill from './icon-mail-settings-fill.vue';

const IconMailSettingsFill = Object.assign(_IconMailSettingsFill, {
  install: (app: App) => {
    app.component(_IconMailSettingsFill.name, _IconMailSettingsFill);
  }
});

export default IconMailSettingsFill;