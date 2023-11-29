import type { App } from 'vue';
import _IconSwitchLine from './icon-switch-line.vue';

const IconSwitchLine = Object.assign(_IconSwitchLine, {
  install: (app: App) => {
    app.component(_IconSwitchLine.name, _IconSwitchLine);
  }
});

export default IconSwitchLine;