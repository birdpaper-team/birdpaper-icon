import type { App } from 'vue';
import _IconBookmarkThree from './icon-bookmark-three.vue';

const IconBookmarkThree = Object.assign(_IconBookmarkThree, {
  install: (app: App) => {
    app.component(_IconBookmarkThree.name, _IconBookmarkThree);
  }
});

export default IconBookmarkThree;