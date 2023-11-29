import type { App } from 'vue';
import _IconSubscript2 from './icon-subscript-2.vue';

const IconSubscript2 = Object.assign(_IconSubscript2, {
  install: (app: App) => {
    app.component(_IconSubscript2.name, _IconSubscript2);
  }
});

export default IconSubscript2;