import type { App } from 'vue';
import _IconSideBarFill from './icon-side-bar-fill.vue';

const IconSideBarFill = Object.assign(_IconSideBarFill, {
  install: (app: App) => {
    app.component(_IconSideBarFill.name, _IconSideBarFill);
  }
});

export default IconSideBarFill;