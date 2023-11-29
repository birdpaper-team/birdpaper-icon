import type { App } from 'vue';
import _IconWechat from './icon-wechat.vue';

const IconWechat = Object.assign(_IconWechat, {
  install: (app: App) => {
    app.component(_IconWechat.name, _IconWechat);
  }
});

export default IconWechat;