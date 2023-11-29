import type { App } from 'vue';
import _IconTipsOne from './icon-tips-one.vue';

const IconTipsOne = Object.assign(_IconTipsOne, {
  install: (app: App) => {
    app.component(_IconTipsOne.name, _IconTipsOne);
  }
});

export default IconTipsOne;