import type { App } from 'vue';
import _IconListSettingsFill from './icon-list-settings-fill.vue';

const IconListSettingsFill = Object.assign(_IconListSettingsFill, {
  install: (app: App) => {
    app.component(_IconListSettingsFill.name, _IconListSettingsFill);
  }
});

export default IconListSettingsFill;