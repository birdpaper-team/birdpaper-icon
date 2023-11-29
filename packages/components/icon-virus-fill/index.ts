import type { App } from 'vue';
import _IconVirusFill from './icon-virus-fill.vue';

const IconVirusFill = Object.assign(_IconVirusFill, {
  install: (app: App) => {
    app.component(_IconVirusFill.name, _IconVirusFill);
  }
});

export default IconVirusFill;