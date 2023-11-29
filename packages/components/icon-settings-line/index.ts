import type { App } from 'vue';
import _IconSettingsLine from './icon-settings-line.vue';

const IconSettingsLine = Object.assign(_IconSettingsLine, {
  install: (app: App) => {
    app.component(_IconSettingsLine.name, _IconSettingsLine);
  }
});

export default IconSettingsLine;