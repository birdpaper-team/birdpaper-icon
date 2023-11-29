import type { App } from 'vue';
import _IconMerge from './icon-merge.vue';

const IconMerge = Object.assign(_IconMerge, {
  install: (app: App) => {
    app.component(_IconMerge.name, _IconMerge);
  }
});

export default IconMerge;