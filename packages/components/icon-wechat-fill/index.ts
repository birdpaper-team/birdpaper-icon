import type { App } from 'vue';
import _IconWechatFill from './icon-wechat-fill.vue';

const IconWechatFill = Object.assign(_IconWechatFill, {
  install: (app: App) => {
    app.component(_IconWechatFill.name, _IconWechatFill);
  }
});

export default IconWechatFill;