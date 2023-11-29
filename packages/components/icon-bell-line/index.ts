import type { App } from 'vue';
import _IconBellLine from './icon-bell-line.vue';

const IconBellLine = Object.assign(_IconBellLine, {
  install: (app: App) => {
    app.component(_IconBellLine.name, _IconBellLine);
  }
});

export default IconBellLine;