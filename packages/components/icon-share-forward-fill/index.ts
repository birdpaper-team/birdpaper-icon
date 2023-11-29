import type { App } from 'vue';
import _IconShareForwardFill from './icon-share-forward-fill.vue';

const IconShareForwardFill = Object.assign(_IconShareForwardFill, {
  install: (app: App) => {
    app.component(_IconShareForwardFill.name, _IconShareForwardFill);
  }
});

export default IconShareForwardFill;