import type { App } from 'vue';
import _IconSwitchThemes from './icon-switch-themes.vue';

const IconSwitchThemes = Object.assign(_IconSwitchThemes, {
  install: (app: App) => {
    app.component(_IconSwitchThemes.name, _IconSwitchThemes);
  }
});

export default IconSwitchThemes;