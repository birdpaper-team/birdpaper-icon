import type { App } from 'vue';
import _IconSidebarFoldFill from './icon-sidebar-fold-fill.vue';

const IconSidebarFoldFill = Object.assign(_IconSidebarFoldFill, {
  install: (app: App) => {
    app.component(_IconSidebarFoldFill.name, _IconSidebarFoldFill);
  }
});

export default IconSidebarFoldFill;