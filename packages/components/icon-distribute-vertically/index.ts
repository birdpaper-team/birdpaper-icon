import type { App } from 'vue';
import _IconDistributeVertically from './icon-distribute-vertically.vue';

const IconDistributeVertically = Object.assign(_IconDistributeVertically, {
  install: (app: App) => {
    app.component(_IconDistributeVertically.name, _IconDistributeVertically);
  }
});

export default IconDistributeVertically;