import type { App } from 'vue';
import _IconNavigationLine from './icon-navigation-line.vue';

const IconNavigationLine = Object.assign(_IconNavigationLine, {
  install: (app: App) => {
    app.component(_IconNavigationLine.name, _IconNavigationLine);
  }
});

export default IconNavigationLine;