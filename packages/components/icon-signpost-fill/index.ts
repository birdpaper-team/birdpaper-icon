import type { App } from 'vue';
import _IconSignpostFill from './icon-signpost-fill.vue';

const IconSignpostFill = Object.assign(_IconSignpostFill, {
  install: (app: App) => {
    app.component(_IconSignpostFill.name, _IconSignpostFill);
  }
});

export default IconSignpostFill;