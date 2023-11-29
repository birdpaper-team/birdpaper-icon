import type { App } from 'vue';
import _IconAnchorTwo from './icon-anchor-two.vue';

const IconAnchorTwo = Object.assign(_IconAnchorTwo, {
  install: (app: App) => {
    app.component(_IconAnchorTwo.name, _IconAnchorTwo);
  }
});

export default IconAnchorTwo;