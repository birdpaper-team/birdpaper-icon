import type { App } from 'vue';
import _IconBreadOne from './icon-bread-one.vue';

const IconBreadOne = Object.assign(_IconBreadOne, {
  install: (app: App) => {
    app.component(_IconBreadOne.name, _IconBreadOne);
  }
});

export default IconBreadOne;