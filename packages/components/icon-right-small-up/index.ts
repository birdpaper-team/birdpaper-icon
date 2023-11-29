import type { App } from 'vue';
import _IconRightSmallUp from './icon-right-small-up.vue';

const IconRightSmallUp = Object.assign(_IconRightSmallUp, {
  install: (app: App) => {
    app.component(_IconRightSmallUp.name, _IconRightSmallUp);
  }
});

export default IconRightSmallUp;