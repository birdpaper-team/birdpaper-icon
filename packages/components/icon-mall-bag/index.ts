import type { App } from 'vue';
import _IconMallBag from './icon-mall-bag.vue';

const IconMallBag = Object.assign(_IconMallBag, {
  install: (app: App) => {
    app.component(_IconMallBag.name, _IconMallBag);
  }
});

export default IconMallBag;