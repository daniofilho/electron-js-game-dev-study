import Phaser from 'phaser';

import sceneMain from '../scenes/main/index';

import './fonts';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1360,
  height: 768,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [sceneMain],
  banner: false,
};

new Phaser.Game(config);
