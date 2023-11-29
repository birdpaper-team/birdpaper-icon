import type { App } from 'vue';
import _IconBold from './icon-bold.vue';

const IconBold = Object.assign(_IconBold, {
  install: (app: App) => {
    app.component(_IconBold.name, _IconBold);
  }
});

export default IconBold;