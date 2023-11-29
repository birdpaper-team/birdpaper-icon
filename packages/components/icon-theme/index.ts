import type { App } from 'vue';
import _IconTheme from './icon-theme.vue';

const IconTheme = Object.assign(_IconTheme, {
  install: (app: App) => {
    app.component(_IconTheme.name, _IconTheme);
  }
});

export default IconTheme;