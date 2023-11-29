import type { App } from 'vue';
import _IconSkipLeftFill from './icon-skip-left-fill.vue';

const IconSkipLeftFill = Object.assign(_IconSkipLeftFill, {
  install: (app: App) => {
    app.component(_IconSkipLeftFill.name, _IconSkipLeftFill);
  }
});

export default IconSkipLeftFill;