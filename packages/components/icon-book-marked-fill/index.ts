import type { App } from 'vue';
import _IconBookMarkedFill from './icon-book-marked-fill.vue';

const IconBookMarkedFill = Object.assign(_IconBookMarkedFill, {
  install: (app: App) => {
    app.component(_IconBookMarkedFill.name, _IconBookMarkedFill);
  }
});

export default IconBookMarkedFill;