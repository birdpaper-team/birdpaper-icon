import type { App } from 'vue';
import _IconNewspaperFill from './icon-newspaper-fill.vue';

const IconNewspaperFill = Object.assign(_IconNewspaperFill, {
  install: (app: App) => {
    app.component(_IconNewspaperFill.name, _IconNewspaperFill);
  }
});

export default IconNewspaperFill;