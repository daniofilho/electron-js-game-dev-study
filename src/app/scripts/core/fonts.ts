import baseURL from '../baseURL';

const loadFont = (name: string, url: string): void => {
  const newFont = new FontFace(name, `url(${url})`);

  newFont
    .load()
    .then((loaded) => {
      // avoiding TS error
      (document as any).fonts.add(loaded);
    })
    .catch(function (error) {
      return error;
    });
};

loadFont('Press Start', `${baseURL}/fonts/press-start-2p-v9-latin-regular.ttf`);
