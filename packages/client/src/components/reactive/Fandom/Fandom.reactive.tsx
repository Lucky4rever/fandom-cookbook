import type { Fandom as FandomProps } from '@utils/types/fandom.type';

type Props = Prettify<FandomProps> & {
  children?: never;
};

const Fandom = ({fandom, title, logo, bgImage, children, recipes}: Props): JSX.Element => {
  // const [renderedDescription, setRenderedDescription] = useState<JSX.Element>();

  // useEffect(() => {
  //   const renderedDesc = useMarkdownRenderer(description);
  //   setRenderedDescription(renderedDesc);
  // }, []);

  return (
    <div className="wrapper">
      <section className="front">
        <picture>
          <source srcSet={bgImage} />
          <img alt={fandom} loading="lazy" />
        </picture>
        <img className="logo" src={logo} alt="" loading="lazy" />
      </section>
      <h1>{title}</h1>
      <div className="desc">{children}</div>
      {
        recipes?.map((r) => r).length ? (<h2>Recipes:</h2>) : (<></>)
      }
      <div className="recipe-wrapper">
        {recipes?.map((recipe) => (<div className="recipe">
          <a className="recipe" href={`/fandom/${fandom}/${recipe._idrec}`}>{recipe.name}</a>
        </div>))}
      </div>
    </div>
  );
};

export default Fandom;
