import type { App } from 'vue';
import _IconBytedanceApplets from './icon-bytedance-applets.vue';

const IconBytedanceApplets = Object.assign(_IconBytedanceApplets, {
  install: (app: App) => {
    app.component(_IconBytedanceApplets.name, _IconBytedanceApplets);
  }
});

export default IconBytedanceApplets;