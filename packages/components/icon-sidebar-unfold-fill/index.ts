import type { App } from 'vue';
import _IconSidebarUnfoldFill from './icon-sidebar-unfold-fill.vue';

const IconSidebarUnfoldFill = Object.assign(_IconSidebarUnfoldFill, {
  install: (app: App) => {
    app.component(_IconSidebarUnfoldFill.name, _IconSidebarUnfoldFill);
  }
});

export default IconSidebarUnfoldFill;