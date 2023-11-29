import type { App } from 'vue';
import _IconRightBar from './icon-right-bar.vue';

const IconRightBar = Object.assign(_IconRightBar, {
  install: (app: App) => {
    app.component(_IconRightBar.name, _IconRightBar);
  }
});

export default IconRightBar;