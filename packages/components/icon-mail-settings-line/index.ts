import type { App } from 'vue';
import _IconMailSettingsLine from './icon-mail-settings-line.vue';

const IconMailSettingsLine = Object.assign(_IconMailSettingsLine, {
  install: (app: App) => {
    app.component(_IconMailSettingsLine.name, _IconMailSettingsLine);
  }
});

export default IconMailSettingsLine;