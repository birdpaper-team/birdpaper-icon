import type { App } from 'vue';
import _IconSafeLine from './icon-safe-line.vue';

const IconSafeLine = Object.assign(_IconSafeLine, {
  install: (app: App) => {
    app.component(_IconSafeLine.name, _IconSafeLine);
  }
});

export default IconSafeLine;