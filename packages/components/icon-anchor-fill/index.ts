import type { App } from 'vue';
import _IconAnchorFill from './icon-anchor-fill.vue';

const IconAnchorFill = Object.assign(_IconAnchorFill, {
  install: (app: App) => {
    app.component(_IconAnchorFill.name, _IconAnchorFill);
  }
});

export default IconAnchorFill;