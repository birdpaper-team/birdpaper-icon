import type { App } from 'vue';
import _IconRadish from './icon-radish.vue';

const IconRadish = Object.assign(_IconRadish, {
  install: (app: App) => {
    app.component(_IconRadish.name, _IconRadish);
  }
});

export default IconRadish;