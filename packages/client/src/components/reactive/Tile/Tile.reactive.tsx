import { type TileProps } from "@utils/types/tile.type";

type Props = Prettify<TileProps>;

const Tile = ({fandom, logo, frontImage, bgImage}: Props) => {
  return (
    <a className="tile-link" href={`fandom/${fandom}`}>
    <div className="tile">
      <img className="logo" src={logo} alt="" loading="lazy" />
      <img className="front-image" src={frontImage} alt="" loading="lazy" />
      <img className="bg-image" src={bgImage} alt="" loading="lazy" />
    </div>
    </a>
  );
}

export default Tile;
