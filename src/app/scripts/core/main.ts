import Phaser from 'phaser';

import sceneMain from '../scenes/main/index';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1360,
  height: 768,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [sceneMain],
};

new Phaser.Game(config);
