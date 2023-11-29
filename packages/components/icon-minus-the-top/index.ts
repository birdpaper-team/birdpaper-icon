import type { App } from 'vue';
import _IconMinusTheTop from './icon-minus-the-top.vue';

const IconMinusTheTop = Object.assign(_IconMinusTheTop, {
  install: (app: App) => {
    app.component(_IconMinusTheTop.name, _IconMinusTheTop);
  }
});

export default IconMinusTheTop;