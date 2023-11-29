import type { App } from 'vue';
import _IconDeleteFive from './icon-delete-five.vue';

const IconDeleteFive = Object.assign(_IconDeleteFive, {
  install: (app: App) => {
    app.component(_IconDeleteFive.name, _IconDeleteFive);
  }
});

export default IconDeleteFive;