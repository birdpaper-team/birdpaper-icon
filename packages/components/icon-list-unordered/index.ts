import type { App } from 'vue';
import _IconListUnordered from './icon-list-unordered.vue';

const IconListUnordered = Object.assign(_IconListUnordered, {
  install: (app: App) => {
    app.component(_IconListUnordered.name, _IconListUnordered);
  }
});

export default IconListUnordered;