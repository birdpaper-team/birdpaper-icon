import type { App } from 'vue';
import _IconRedditFill from './icon-reddit-fill.vue';

const IconRedditFill = Object.assign(_IconRedditFill, {
  install: (app: App) => {
    app.component(_IconRedditFill.name, _IconRedditFill);
  }
});

export default IconRedditFill;