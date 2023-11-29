import type { App } from 'vue';
import _IconSettingConfig from './icon-setting-config.vue';

const IconSettingConfig = Object.assign(_IconSettingConfig, {
  install: (app: App) => {
    app.component(_IconSettingConfig.name, _IconSettingConfig);
  }
});

export default IconSettingConfig;