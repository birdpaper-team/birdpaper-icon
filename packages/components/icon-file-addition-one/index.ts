import type { App } from 'vue';
import _IconFileAdditionOne from './icon-file-addition-one.vue';

const IconFileAdditionOne = Object.assign(_IconFileAdditionOne, {
  install: (app: App) => {
    app.component(_IconFileAdditionOne.name, _IconFileAdditionOne);
  }
});

export default IconFileAdditionOne;