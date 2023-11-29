import type { App } from 'vue';
import _IconMiniSdCard from './icon-mini-sd-card.vue';

const IconMiniSdCard = Object.assign(_IconMiniSdCard, {
  install: (app: App) => {
    app.component(_IconMiniSdCard.name, _IconMiniSdCard);
  }
});

export default IconMiniSdCard;