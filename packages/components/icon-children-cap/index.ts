import type { App } from 'vue';
import _IconChildrenCap from './icon-children-cap.vue';

const IconChildrenCap = Object.assign(_IconChildrenCap, {
  install: (app: App) => {
    app.component(_IconChildrenCap.name, _IconChildrenCap);
  }
});

export default IconChildrenCap;