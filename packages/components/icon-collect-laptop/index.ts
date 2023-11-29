import type { App } from 'vue';
import _IconCollectLaptop from './icon-collect-laptop.vue';

const IconCollectLaptop = Object.assign(_IconCollectLaptop, {
  install: (app: App) => {
    app.component(_IconCollectLaptop.name, _IconCollectLaptop);
  }
});

export default IconCollectLaptop;