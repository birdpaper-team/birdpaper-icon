import type { App } from 'vue';
import _IconMenuUnfoldLine from './icon-menu-unfold-line.vue';

const IconMenuUnfoldLine = Object.assign(_IconMenuUnfoldLine, {
  install: (app: App) => {
    app.component(_IconMenuUnfoldLine.name, _IconMenuUnfoldLine);
  }
});

export default IconMenuUnfoldLine;