import type { App } from 'vue';
import _IconDeleteThemes from './icon-delete-themes.vue';

const IconDeleteThemes = Object.assign(_IconDeleteThemes, {
  install: (app: App) => {
    app.component(_IconDeleteThemes.name, _IconDeleteThemes);
  }
});

export default IconDeleteThemes;