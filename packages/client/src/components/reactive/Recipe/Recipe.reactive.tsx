import type { Recipe as RecipeProps } from '@utils/types/recipe.type';

type Props = Prettify<RecipeProps> & {
    children?: never;
};

const Fandom = ({name, children, img, video}: Props): JSX.Element => {
  return (
    <div className="wrapper">
      <div>{children}</div>
      {
        video ? (
            <div className="video-container">
            <iframe src={video} title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            frameBorder="0" allowFullScreen>
            </iframe>
            </div>
        ) : (<></>)
      }
    </div>
  );
};

export default Fandom;
