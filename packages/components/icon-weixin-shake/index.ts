import type { App } from 'vue';
import _IconWeixinShake from './icon-weixin-shake.vue';

const IconWeixinShake = Object.assign(_IconWeixinShake, {
  install: (app: App) => {
    app.component(_IconWeixinShake.name, _IconWeixinShake);
  }
});

export default IconWeixinShake;