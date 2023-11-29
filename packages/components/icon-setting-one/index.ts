import type { App } from 'vue';
import _IconSettingOne from './icon-setting-one.vue';

const IconSettingOne = Object.assign(_IconSettingOne, {
  install: (app: App) => {
    app.component(_IconSettingOne.name, _IconSettingOne);
  }
});

export default IconSettingOne;