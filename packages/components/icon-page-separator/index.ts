import type { App } from 'vue';
import _IconPageSeparator from './icon-page-separator.vue';

const IconPageSeparator = Object.assign(_IconPageSeparator, {
  install: (app: App) => {
    app.component(_IconPageSeparator.name, _IconPageSeparator);
  }
});

export default IconPageSeparator;