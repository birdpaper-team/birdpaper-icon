import type { App } from 'vue';
import _IconConnectionArrow from './icon-connection-arrow.vue';

const IconConnectionArrow = Object.assign(_IconConnectionArrow, {
  install: (app: App) => {
    app.component(_IconConnectionArrow.name, _IconConnectionArrow);
  }
});

export default IconConnectionArrow;