import type { App } from 'vue';
import _IconMenuUnfoldOne from './icon-menu-unfold-one.vue';

const IconMenuUnfoldOne = Object.assign(_IconMenuUnfoldOne, {
  install: (app: App) => {
    app.component(_IconMenuUnfoldOne.name, _IconMenuUnfoldOne);
  }
});

export default IconMenuUnfoldOne;