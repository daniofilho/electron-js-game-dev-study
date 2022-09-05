import { Scene } from 'phaser';
import baseURL from '../../baseURL';
export default class LoadingScene extends Scene {
  constructor() {
    super('loading-scene');
  }

  preload(): void {
    this.load.baseURL = `${baseURL}images`;

    this.load.image('sky', '/space3.png');
    this.load.image('logo', '/phaser3-logo.png');
    this.load.image('red', '/red.png');
  }

  create(): void {
    this.add.image(680, 384, 'sky');

    const particles = this.add.particles('red');

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });

    const logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }
}
