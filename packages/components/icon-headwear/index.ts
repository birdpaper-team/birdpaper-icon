import type { App } from 'vue';
import _IconHeadwear from './icon-headwear.vue';

const IconHeadwear = Object.assign(_IconHeadwear, {
  install: (app: App) => {
    app.component(_IconHeadwear.name, _IconHeadwear);
  }
});

export default IconHeadwear;