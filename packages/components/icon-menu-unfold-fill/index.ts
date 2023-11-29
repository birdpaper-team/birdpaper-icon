import type { App } from 'vue';
import _IconMenuUnfoldFill from './icon-menu-unfold-fill.vue';

const IconMenuUnfoldFill = Object.assign(_IconMenuUnfoldFill, {
  install: (app: App) => {
    app.component(_IconMenuUnfoldFill.name, _IconMenuUnfoldFill);
  }
});

export default IconMenuUnfoldFill;