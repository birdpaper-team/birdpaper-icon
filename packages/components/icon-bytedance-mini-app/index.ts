import type { App } from 'vue';
import _IconBytedanceMiniApp from './icon-bytedance-mini-app.vue';

const IconBytedanceMiniApp = Object.assign(_IconBytedanceMiniApp, {
  install: (app: App) => {
    app.component(_IconBytedanceMiniApp.name, _IconBytedanceMiniApp);
  }
});

export default IconBytedanceMiniApp;