import type { App } from 'vue';
import _IconDividingLineOne from './icon-dividing-line-one.vue';

const IconDividingLineOne = Object.assign(_IconDividingLineOne, {
  install: (app: App) => {
    app.component(_IconDividingLineOne.name, _IconDividingLineOne);
  }
});

export default IconDividingLineOne;