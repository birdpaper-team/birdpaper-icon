import type { App } from 'vue';
import _IconDataScreen from './icon-data-screen.vue';

const IconDataScreen = Object.assign(_IconDataScreen, {
  install: (app: App) => {
    app.component(_IconDataScreen.name, _IconDataScreen);
  }
});

export default IconDataScreen;