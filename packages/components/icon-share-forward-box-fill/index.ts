import type { App } from 'vue';
import _IconShareForwardBoxFill from './icon-share-forward-box-fill.vue';

const IconShareForwardBoxFill = Object.assign(_IconShareForwardBoxFill, {
  install: (app: App) => {
    app.component(_IconShareForwardBoxFill.name, _IconShareForwardBoxFill);
  }
});

export default IconShareForwardBoxFill;