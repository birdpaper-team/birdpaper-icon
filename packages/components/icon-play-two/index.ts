import type { App } from 'vue';
import _IconPlayTwo from './icon-play-two.vue';

const IconPlayTwo = Object.assign(_IconPlayTwo, {
  install: (app: App) => {
    app.component(_IconPlayTwo.name, _IconPlayTwo);
  }
});

export default IconPlayTwo;