import type { App } from 'vue';
import _IconBlockTwo from './icon-block-two.vue';

const IconBlockTwo = Object.assign(_IconBlockTwo, {
  install: (app: App) => {
    app.component(_IconBlockTwo.name, _IconBlockTwo);
  }
});

export default IconBlockTwo;