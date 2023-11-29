import type { App } from 'vue';
import _IconTaobao from './icon-taobao.vue';

const IconTaobao = Object.assign(_IconTaobao, {
  install: (app: App) => {
    app.component(_IconTaobao.name, _IconTaobao);
  }
});

export default IconTaobao;