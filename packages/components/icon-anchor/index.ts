import type { App } from 'vue';
import _IconAnchor from './icon-anchor.vue';

const IconAnchor = Object.assign(_IconAnchor, {
  install: (app: App) => {
    app.component(_IconAnchor.name, _IconAnchor);
  }
});

export default IconAnchor;