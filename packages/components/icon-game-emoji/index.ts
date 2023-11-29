import type { App } from 'vue';
import _IconGameEmoji from './icon-game-emoji.vue';

const IconGameEmoji = Object.assign(_IconGameEmoji, {
  install: (app: App) => {
    app.component(_IconGameEmoji.name, _IconGameEmoji);
  }
});

export default IconGameEmoji;