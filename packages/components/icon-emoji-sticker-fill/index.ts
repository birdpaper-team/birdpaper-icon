import type { App } from 'vue';
import _IconEmojiStickerFill from './icon-emoji-sticker-fill.vue';

const IconEmojiStickerFill = Object.assign(_IconEmojiStickerFill, {
  install: (app: App) => {
    app.component(_IconEmojiStickerFill.name, _IconEmojiStickerFill);
  }
});

export default IconEmojiStickerFill;