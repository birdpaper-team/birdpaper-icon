import type { App } from 'vue';
import _IconSdCard from './icon-sd-card.vue';

const IconSdCard = Object.assign(_IconSdCard, {
  install: (app: App) => {
    app.component(_IconSdCard.name, _IconSdCard);
  }
});

export default IconSdCard;