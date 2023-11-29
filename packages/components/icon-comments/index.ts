import type { App } from 'vue';
import _IconComments from './icon-comments.vue';

const IconComments = Object.assign(_IconComments, {
  install: (app: App) => {
    app.component(_IconComments.name, _IconComments);
  }
});

export default IconComments;