import type { App } from 'vue';
import _IconListIndefinite from './icon-list-indefinite.vue';

const IconListIndefinite = Object.assign(_IconListIndefinite, {
  install: (app: App) => {
    app.component(_IconListIndefinite.name, _IconListIndefinite);
  }
});

export default IconListIndefinite;