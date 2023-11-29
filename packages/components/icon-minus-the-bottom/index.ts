import type { App } from 'vue';
import _IconMinusTheBottom from './icon-minus-the-bottom.vue';

const IconMinusTheBottom = Object.assign(_IconMinusTheBottom, {
  install: (app: App) => {
    app.component(_IconMinusTheBottom.name, _IconMinusTheBottom);
  }
});

export default IconMinusTheBottom;