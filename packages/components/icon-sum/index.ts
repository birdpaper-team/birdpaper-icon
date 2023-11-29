import type { App } from 'vue';
import _IconSum from './icon-sum.vue';

const IconSum = Object.assign(_IconSum, {
  install: (app: App) => {
    app.component(_IconSum.name, _IconSum);
  }
});

export default IconSum;