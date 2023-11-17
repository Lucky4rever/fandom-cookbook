type RecipeHighlight = {
  _idrec: number;
  name: string;
};

type Recipe = RecipeHighlight & {
  name: string;
  recipe: string;
  img: string;
  video?: string | undefined
};

export type {
  RecipeHighlight,
  Recipe,
};
