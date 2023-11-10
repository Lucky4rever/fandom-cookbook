import { type TileProps } from "@utils/types/tile.type";

type Props = Prettify<TileProps>;

const Tile = ({fandom, logo, ['front-image']: frontImage, ['bg-image']: bgImage}: TileProps) => {
  return (
    <a className="tile-link" href={`fandom/${fandom}`}>
    <div className="tile">
      <img className="logo" src={logo} alt="" />
      <img className="front-image" src={frontImage} alt="" />
      <img className="bg-image" src={bgImage} alt="" />
    </div>
    </a>
  );
}

export default Tile;
