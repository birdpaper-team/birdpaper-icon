import type { App } from 'vue';
import _IconRice from './icon-rice.vue';

const IconRice = Object.assign(_IconRice, {
  install: (app: App) => {
    app.component(_IconRice.name, _IconRice);
  }
});

export default IconRice;