import type { Recipe as RecipeProps } from '@utils/types/recipe.type';

type Props = Prettify<RecipeProps>

const Fandom = ({name, recipe, img, video}: Props): JSX.Element => {
  // const [renderedDescription, setRenderedDescription] = useState<JSX.Element>();

  // useEffect(() => {
  //   const renderedDesc = useMarkdownRenderer(description);
  //   setRenderedDescription(renderedDesc);
  // }, []);

  return (
    <div className="wrapper">
      <h1>{name}</h1>
      <h1>{recipe}</h1>
    </div>
  );
};

export default Fandom;
