import type { App } from 'vue';
import _IconLike from './icon-like.vue';

const IconLike = Object.assign(_IconLike, {
  install: (app: App) => {
    app.component(_IconLike.name, _IconLike);
  }
});

export default IconLike;