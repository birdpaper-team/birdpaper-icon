import type { App } from 'vue';
import _IconSkypeLine from './icon-skype-line.vue';

const IconSkypeLine = Object.assign(_IconSkypeLine, {
  install: (app: App) => {
    app.component(_IconSkypeLine.name, _IconSkypeLine);
  }
});

export default IconSkypeLine;