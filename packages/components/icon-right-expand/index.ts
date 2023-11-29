import type { App } from 'vue';
import _IconRightExpand from './icon-right-expand.vue';

const IconRightExpand = Object.assign(_IconRightExpand, {
  install: (app: App) => {
    app.component(_IconRightExpand.name, _IconRightExpand);
  }
});

export default IconRightExpand;