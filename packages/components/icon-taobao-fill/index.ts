import type { App } from 'vue';
import _IconTaobaoFill from './icon-taobao-fill.vue';

const IconTaobaoFill = Object.assign(_IconTaobaoFill, {
  install: (app: App) => {
    app.component(_IconTaobaoFill.name, _IconTaobaoFill);
  }
});

export default IconTaobaoFill;