import type { Recipe } from './recipe.type';

type FandomHighlight = {
  id: number; 
  fandom: string;

  logo: string;
  frontImage: string;
  bgImage: string;
};

type Fandom = FandomHighlight & {
  title: string;
  description: string;

  bookCover?: string | undefined;
  recipes: Recipe[] | null;
};

export type {
  FandomHighlight,
  Fandom,
};
