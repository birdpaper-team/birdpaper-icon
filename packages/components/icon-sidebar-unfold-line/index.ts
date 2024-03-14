import type { App } from 'vue';
import _IconSidebarUnfoldLine from './icon-sidebar-unfold-line.vue';

const IconSidebarUnfoldLine = Object.assign(_IconSidebarUnfoldLine, {
  install: (app: App) => {
    app.component(_IconSidebarUnfoldLine.name, _IconSidebarUnfoldLine);
  }
});

export default IconSidebarUnfoldLine;