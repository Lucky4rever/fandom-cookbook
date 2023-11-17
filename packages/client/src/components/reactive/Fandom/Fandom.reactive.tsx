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
      {recipes?.map((recipe) => (<a href={`/fandom/${fandom}/${recipe.id}`}>{recipe.title}</a>))}
    </div>
  );
};

export default Fandom;
