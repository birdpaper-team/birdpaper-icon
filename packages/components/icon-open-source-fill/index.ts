import type { App } from 'vue';
import _IconOpenSourceFill from './icon-open-source-fill.vue';

const IconOpenSourceFill = Object.assign(_IconOpenSourceFill, {
  install: (app: App) => {
    app.component(_IconOpenSourceFill.name, _IconOpenSourceFill);
  }
});

export default IconOpenSourceFill;