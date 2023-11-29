import type { App } from 'vue';
import _IconUpC from './icon-up-c.vue';

const IconUpC = Object.assign(_IconUpC, {
  install: (app: App) => {
    app.component(_IconUpC.name, _IconUpC);
  }
});

export default IconUpC;