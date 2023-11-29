import type { App } from 'vue';
import _IconRock from './icon-rock.vue';

const IconRock = Object.assign(_IconRock, {
  install: (app: App) => {
    app.component(_IconRock.name, _IconRock);
  }
});

export default IconRock;