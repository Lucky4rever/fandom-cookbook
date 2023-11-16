import data from '../data/data.json';
import type { Fandom, FandomHighlight } from '../entities/fandom.entity';

function fandomsServices() {
  const getFandomHighights = () => {
    const fandomHighlights = data.map((fandom: unknown) => (fandom as FandomHighlight));

    return fandomHighlights;
  };

  const getFandomByFandomName = (fandomName: number | string) => {
    const fandomByFandomName = data.find((fandom: unknown) => (fandom as Fandom).fandom === fandomName) as unknown as Fandom;

    return fandomByFandomName;
  };

  return {
    getFandomHighights,
    getFandomByFandomName,
  };
}

export default fandomsServices;
