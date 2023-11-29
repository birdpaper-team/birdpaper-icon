import type { App } from 'vue';
import _IconFileSettingsLine from './icon-file-settings-line.vue';

const IconFileSettingsLine = Object.assign(_IconFileSettingsLine, {
  install: (app: App) => {
    app.component(_IconFileSettingsLine.name, _IconFileSettingsLine);
  }
});

export default IconFileSettingsLine;