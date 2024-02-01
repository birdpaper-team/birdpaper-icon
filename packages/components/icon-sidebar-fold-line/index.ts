import type { App } from 'vue';
import _IconSidebarFoldLine from './icon-sidebar-fold-line.vue';

const IconSidebarFoldLine = Object.assign(_IconSidebarFoldLine, {
  install: (app: App) => {
    app.component(_IconSidebarFoldLine.name, _IconSidebarFoldLine);
  }
});

export default IconSidebarFoldLine;