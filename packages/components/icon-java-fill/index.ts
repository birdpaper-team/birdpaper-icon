import type { App } from 'vue';
import _IconJavaFill from './icon-java-fill.vue';

const IconJavaFill = Object.assign(_IconJavaFill, {
  install: (app: App) => {
    app.component(_IconJavaFill.name, _IconJavaFill);
  }
});

export default IconJavaFill;