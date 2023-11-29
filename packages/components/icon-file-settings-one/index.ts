import type { App } from 'vue';
import _IconFileSettingsOne from './icon-file-settings-one.vue';

const IconFileSettingsOne = Object.assign(_IconFileSettingsOne, {
  install: (app: App) => {
    app.component(_IconFileSettingsOne.name, _IconFileSettingsOne);
  }
});

export default IconFileSettingsOne;