import type { App } from 'vue';
import _IconChildrenPyramid from './icon-children-pyramid.vue';

const IconChildrenPyramid = Object.assign(_IconChildrenPyramid, {
  install: (app: App) => {
    app.component(_IconChildrenPyramid.name, _IconChildrenPyramid);
  }
});

export default IconChildrenPyramid;