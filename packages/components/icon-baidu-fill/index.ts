import type { App } from 'vue';
import _IconBaiduFill from './icon-baidu-fill.vue';

const IconBaiduFill = Object.assign(_IconBaiduFill, {
  install: (app: App) => {
    app.component(_IconBaiduFill.name, _IconBaiduFill);
  }
});

export default IconBaiduFill;