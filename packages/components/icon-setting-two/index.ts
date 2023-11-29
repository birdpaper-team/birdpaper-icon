import type { App } from 'vue';
import _IconSettingTwo from './icon-setting-two.vue';

const IconSettingTwo = Object.assign(_IconSettingTwo, {
  install: (app: App) => {
    app.component(_IconSettingTwo.name, _IconSettingTwo);
  }
});

export default IconSettingTwo;