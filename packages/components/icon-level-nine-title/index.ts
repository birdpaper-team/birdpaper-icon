import type { App } from 'vue';
import _IconLevelNineTitle from './icon-level-nine-title.vue';

const IconLevelNineTitle = Object.assign(_IconLevelNineTitle, {
  install: (app: App) => {
    app.component(_IconLevelNineTitle.name, _IconLevelNineTitle);
  }
});

export default IconLevelNineTitle;