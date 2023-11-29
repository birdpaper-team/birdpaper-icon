import type { App } from 'vue';
import _IconQiyehao from './icon-qiyehao.vue';

const IconQiyehao = Object.assign(_IconQiyehao, {
  install: (app: App) => {
    app.component(_IconQiyehao.name, _IconQiyehao);
  }
});

export default IconQiyehao;