import type { App } from 'vue';
import _IconSeparator from './icon-separator.vue';

const IconSeparator = Object.assign(_IconSeparator, {
  install: (app: App) => {
    app.component(_IconSeparator.name, _IconSeparator);
  }
});

export default IconSeparator;