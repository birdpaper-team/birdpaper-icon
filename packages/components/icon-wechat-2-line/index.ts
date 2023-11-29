import type { App } from 'vue';
import _IconWechat2Line from './icon-wechat-2-line.vue';

const IconWechat2Line = Object.assign(_IconWechat2Line, {
  install: (app: App) => {
    app.component(_IconWechat2Line.name, _IconWechat2Line);
  }
});

export default IconWechat2Line;