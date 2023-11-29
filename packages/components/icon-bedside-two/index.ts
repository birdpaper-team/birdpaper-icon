import type { App } from 'vue';
import _IconBedsideTwo from './icon-bedside-two.vue';

const IconBedsideTwo = Object.assign(_IconBedsideTwo, {
  install: (app: App) => {
    app.component(_IconBedsideTwo.name, _IconBedsideTwo);
  }
});

export default IconBedsideTwo;