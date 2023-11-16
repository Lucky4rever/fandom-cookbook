import { map } from 'nanostores';
import useBackend from './hooks/useBackend.hook';
import type { FandomHighlight } from './types/fandom.type';

const fandomsStore = map<FandomHighlight>();

const { data } = await useBackend<FandomHighlight[]>({
  url: `http://localhost:8080/api/fandoms/fandoms-highlights`,
});

data.forEach((item) => fandomsStore.set(item));

export default fandomsStore;