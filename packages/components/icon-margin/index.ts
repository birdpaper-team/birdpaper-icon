import type { App } from 'vue';
import _IconMargin from './icon-margin.vue';

const IconMargin = Object.assign(_IconMargin, {
  install: (app: App) => {
    app.component(_IconMargin.name, _IconMargin);
  }
});

export default IconMargin;