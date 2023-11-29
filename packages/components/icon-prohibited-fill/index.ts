import type { App } from 'vue';
import _IconProhibitedFill from './icon-prohibited-fill.vue';

const IconProhibitedFill = Object.assign(_IconProhibitedFill, {
  install: (app: App) => {
    app.component(_IconProhibitedFill.name, _IconProhibitedFill);
  }
});

export default IconProhibitedFill;