import type { App } from 'vue';
import _IconSimCard from './icon-sim-card.vue';

const IconSimCard = Object.assign(_IconSimCard, {
  install: (app: App) => {
    app.component(_IconSimCard.name, _IconSimCard);
  }
});

export default IconSimCard;