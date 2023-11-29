import type { App } from 'vue';
import _IconTopBar from './icon-top-bar.vue';

const IconTopBar = Object.assign(_IconTopBar, {
  install: (app: App) => {
    app.component(_IconTopBar.name, _IconTopBar);
  }
});

export default IconTopBar;