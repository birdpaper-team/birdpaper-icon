import type { App } from 'vue';
import _IconBytedance from './icon-bytedance.vue';

const IconBytedance = Object.assign(_IconBytedance, {
  install: (app: App) => {
    app.component(_IconBytedance.name, _IconBytedance);
  }
});

export default IconBytedance;