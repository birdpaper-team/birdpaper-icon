import type { App } from 'vue';
import _IconLevelSevenTitle from './icon-level-seven-title.vue';

const IconLevelSevenTitle = Object.assign(_IconLevelSevenTitle, {
  install: (app: App) => {
    app.component(_IconLevelSevenTitle.name, _IconLevelSevenTitle);
  }
});

export default IconLevelSevenTitle;