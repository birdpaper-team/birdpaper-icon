import type { App } from 'vue';
import _IconUserSettingsLine from './icon-user-settings-line.vue';

const IconUserSettingsLine = Object.assign(_IconUserSettingsLine, {
  install: (app: App) => {
    app.component(_IconUserSettingsLine.name, _IconUserSettingsLine);
  }
});

export default IconUserSettingsLine;