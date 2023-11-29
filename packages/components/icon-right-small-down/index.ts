import type { App } from 'vue';
import _IconRightSmallDown from './icon-right-small-down.vue';

const IconRightSmallDown = Object.assign(_IconRightSmallDown, {
  install: (app: App) => {
    app.component(_IconRightSmallDown.name, _IconRightSmallDown);
  }
});

export default IconRightSmallDown;