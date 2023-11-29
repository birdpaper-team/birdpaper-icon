import type { App } from 'vue';
import _IconTitleLevel from './icon-title-level.vue';

const IconTitleLevel = Object.assign(_IconTitleLevel, {
  install: (app: App) => {
    app.component(_IconTitleLevel.name, _IconTitleLevel);
  }
});

export default IconTitleLevel;