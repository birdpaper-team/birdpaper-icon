import type { App } from 'vue';
import _IconSettingThree from './icon-setting-three.vue';

const IconSettingThree = Object.assign(_IconSettingThree, {
  install: (app: App) => {
    app.component(_IconSettingThree.name, _IconSettingThree);
  }
});

export default IconSettingThree;