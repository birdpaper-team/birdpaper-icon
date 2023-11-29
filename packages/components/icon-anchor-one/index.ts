import type { App } from 'vue';
import _IconAnchorOne from './icon-anchor-one.vue';

const IconAnchorOne = Object.assign(_IconAnchorOne, {
  install: (app: App) => {
    app.component(_IconAnchorOne.name, _IconAnchorOne);
  }
});

export default IconAnchorOne;