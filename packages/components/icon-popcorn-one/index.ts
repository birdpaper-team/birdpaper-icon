import type { App } from 'vue';
import _IconPopcornOne from './icon-popcorn-one.vue';

const IconPopcornOne = Object.assign(_IconPopcornOne, {
  install: (app: App) => {
    app.component(_IconPopcornOne.name, _IconPopcornOne);
  }
});

export default IconPopcornOne;