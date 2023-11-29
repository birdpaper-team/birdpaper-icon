import type { App } from 'vue';
import _IconWechatPayFill from './icon-wechat-pay-fill.vue';

const IconWechatPayFill = Object.assign(_IconWechatPayFill, {
  install: (app: App) => {
    app.component(_IconWechatPayFill.name, _IconWechatPayFill);
  }
});

export default IconWechatPayFill;