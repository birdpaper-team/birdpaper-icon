import type { App } from 'vue';
import _IconPig from './icon-pig.vue';

const IconPig = Object.assign(_IconPig, {
  install: (app: App) => {
    app.component(_IconPig.name, _IconPig);
  }
});

export default IconPig;