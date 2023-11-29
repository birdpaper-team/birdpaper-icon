import type { App } from 'vue';
import _IconSlackFill from './icon-slack-fill.vue';

const IconSlackFill = Object.assign(_IconSlackFill, {
  install: (app: App) => {
    app.component(_IconSlackFill.name, _IconSlackFill);
  }
});

export default IconSlackFill;