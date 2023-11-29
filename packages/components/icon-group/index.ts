import type { App } from 'vue';
import _IconGroup from './icon-group.vue';

const IconGroup = Object.assign(_IconGroup, {
  install: (app: App) => {
    app.component(_IconGroup.name, _IconGroup);
  }
});

export default IconGroup;