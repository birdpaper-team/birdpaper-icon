import type { App } from 'vue';
import _IconCastScreen from './icon-cast-screen.vue';

const IconCastScreen = Object.assign(_IconCastScreen, {
  install: (app: App) => {
    app.component(_IconCastScreen.name, _IconCastScreen);
  }
});

export default IconCastScreen;