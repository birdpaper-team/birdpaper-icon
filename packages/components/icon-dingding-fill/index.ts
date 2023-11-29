import type { App } from 'vue';
import _IconDingdingFill from './icon-dingding-fill.vue';

const IconDingdingFill = Object.assign(_IconDingdingFill, {
  install: (app: App) => {
    app.component(_IconDingdingFill.name, _IconDingdingFill);
  }
});

export default IconDingdingFill;