import type { App } from 'vue';
import _IconInfo from './icon-info.vue';

const IconInfo = Object.assign(_IconInfo, {
  install: (app: App) => {
    app.component(_IconInfo.name, _IconInfo);
  }
});

export default IconInfo;