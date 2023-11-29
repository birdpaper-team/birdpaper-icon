import type { App } from 'vue';
import _IconScanSetting from './icon-scan-setting.vue';

const IconScanSetting = Object.assign(_IconScanSetting, {
  install: (app: App) => {
    app.component(_IconScanSetting.name, _IconScanSetting);
  }
});

export default IconScanSetting;