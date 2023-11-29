import type { App } from 'vue';
import _IconThumbsDown from './icon-thumbs-down.vue';

const IconThumbsDown = Object.assign(_IconThumbsDown, {
  install: (app: App) => {
    app.component(_IconThumbsDown.name, _IconThumbsDown);
  }
});

export default IconThumbsDown;