import type { App } from 'vue';
import _IconAddSubset from './icon-add-subset.vue';

const IconAddSubset = Object.assign(_IconAddSubset, {
  install: (app: App) => {
    app.component(_IconAddSubset.name, _IconAddSubset);
  }
});

export default IconAddSubset;