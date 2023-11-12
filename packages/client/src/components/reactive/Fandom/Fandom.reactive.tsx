import type { Fandom as FandomProps } from '@utils/types/fandom.type';

type Props = Prettify<FandomProps>;

const Fandom = ({fandom, title, description, logo, bgImage}: Props): JSX.Element => {
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
      <p>{description}</p>
    </div>
  );
};

export default Fandom;
