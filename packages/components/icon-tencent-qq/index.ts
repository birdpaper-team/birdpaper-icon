import type { App } from 'vue';
import _IconTencentQq from './icon-tencent-qq.vue';

const IconTencentQq = Object.assign(_IconTencentQq, {
  install: (app: App) => {
    app.component(_IconTencentQq.name, _IconTencentQq);
  }
});

export default IconTencentQq;