import type { App } from 'vue';
import _IconWechat2Fill from './icon-wechat-2-fill.vue';

const IconWechat2Fill = Object.assign(_IconWechat2Fill, {
  install: (app: App) => {
    app.component(_IconWechat2Fill.name, _IconWechat2Fill);
  }
});

export default IconWechat2Fill;