import type { App } from 'vue';
import _IconSplit from './icon-split.vue';

const IconSplit = Object.assign(_IconSplit, {
  install: (app: App) => {
    app.component(_IconSplit.name, _IconSplit);
  }
});

export default IconSplit;