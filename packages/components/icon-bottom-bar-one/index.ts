import type { App } from 'vue';
import _IconBottomBarOne from './icon-bottom-bar-one.vue';

const IconBottomBarOne = Object.assign(_IconBottomBarOne, {
  install: (app: App) => {
    app.component(_IconBottomBarOne.name, _IconBottomBarOne);
  }
});

export default IconBottomBarOne;