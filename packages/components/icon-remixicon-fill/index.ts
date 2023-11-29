import type { App } from 'vue';
import _IconRemixiconFill from './icon-remixicon-fill.vue';

const IconRemixiconFill = Object.assign(_IconRemixiconFill, {
  install: (app: App) => {
    app.component(_IconRemixiconFill.name, _IconRemixiconFill);
  }
});

export default IconRemixiconFill;