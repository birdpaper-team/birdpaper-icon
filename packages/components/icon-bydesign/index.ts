import type { App } from 'vue';
import _IconBydesign from './icon-bydesign.vue';

const IconBydesign = Object.assign(_IconBydesign, {
  install: (app: App) => {
    app.component(_IconBydesign.name, _IconBydesign);
  }
});

export default IconBydesign;