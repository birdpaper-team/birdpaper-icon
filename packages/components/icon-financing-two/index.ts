import type { App } from 'vue';
import _IconFinancingTwo from './icon-financing-two.vue';

const IconFinancingTwo = Object.assign(_IconFinancingTwo, {
  install: (app: App) => {
    app.component(_IconFinancingTwo.name, _IconFinancingTwo);
  }
});

export default IconFinancingTwo;