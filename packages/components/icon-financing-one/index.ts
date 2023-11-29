import type { App } from 'vue';
import _IconFinancingOne from './icon-financing-one.vue';

const IconFinancingOne = Object.assign(_IconFinancingOne, {
  install: (app: App) => {
    app.component(_IconFinancingOne.name, _IconFinancingOne);
  }
});

export default IconFinancingOne;