type RecipeHighlight = {
  id: number;
  title: string;
};

type Recipe = RecipeHighlight & {
  recipe: string;
  img: string;
  video?: string | undefined
};

export type {
  RecipeHighlight,
  Recipe,
};
