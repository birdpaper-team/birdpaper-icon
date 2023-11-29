import type { App } from 'vue';
import _IconSlippersOne from './icon-slippers-one.vue';

const IconSlippersOne = Object.assign(_IconSlippersOne, {
  install: (app: App) => {
    app.component(_IconSlippersOne.name, _IconSlippersOne);
  }
});

export default IconSlippersOne;