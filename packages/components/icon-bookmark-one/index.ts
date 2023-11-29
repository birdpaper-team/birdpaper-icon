import type { App } from 'vue';
import _IconBookmarkOne from './icon-bookmark-one.vue';

const IconBookmarkOne = Object.assign(_IconBookmarkOne, {
  install: (app: App) => {
    app.component(_IconBookmarkOne.name, _IconBookmarkOne);
  }
});

export default IconBookmarkOne;