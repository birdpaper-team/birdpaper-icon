import type { App } from 'vue';
import _IconSideBarLine from './icon-side-bar-line.vue';

const IconSideBarLine = Object.assign(_IconSideBarLine, {
  install: (app: App) => {
    app.component(_IconSideBarLine.name, _IconSideBarLine);
  }
});

export default IconSideBarLine;