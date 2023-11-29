import type { App } from 'vue';
import _IconListOrdered from './icon-list-ordered.vue';

const IconListOrdered = Object.assign(_IconListOrdered, {
  install: (app: App) => {
    app.component(_IconListOrdered.name, _IconListOrdered);
  }
});

export default IconListOrdered;