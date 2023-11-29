import type { App } from 'vue';
import _IconAlignVertically from './icon-align-vertically.vue';

const IconAlignVertically = Object.assign(_IconAlignVertically, {
  install: (app: App) => {
    app.component(_IconAlignVertically.name, _IconAlignVertically);
  }
});

export default IconAlignVertically;