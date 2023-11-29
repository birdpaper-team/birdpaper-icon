import type { App } from 'vue';
import _IconAlipayFill from './icon-alipay-fill.vue';

const IconAlipayFill = Object.assign(_IconAlipayFill, {
  install: (app: App) => {
    app.component(_IconAlipayFill.name, _IconAlipayFill);
  }
});

export default IconAlipayFill;