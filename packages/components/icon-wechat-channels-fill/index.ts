import type { App } from 'vue';
import _IconWechatChannelsFill from './icon-wechat-channels-fill.vue';

const IconWechatChannelsFill = Object.assign(_IconWechatChannelsFill, {
  install: (app: App) => {
    app.component(_IconWechatChannelsFill.name, _IconWechatChannelsFill);
  }
});

export default IconWechatChannelsFill;