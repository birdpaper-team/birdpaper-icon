import type { App } from 'vue';
import _IconNewspaperFolding from './icon-newspaper-folding.vue';

const IconNewspaperFolding = Object.assign(_IconNewspaperFolding, {
  install: (app: App) => {
    app.component(_IconNewspaperFolding.name, _IconNewspaperFolding);
  }
});

export default IconNewspaperFolding;