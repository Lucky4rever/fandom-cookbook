import { type TileProps } from "@utils/types/tile.type";
import { TileLayout } from "./Tile.styled";
import { useEffect, useRef, type ElementRef } from "react";

type Props = Prettify<TileProps>;

const Tile = ({id, title, description, img}: Props): JSX.Element => {
  const tile = useRef<ElementRef<"img">>(null);

  useEffect(() => {
    tile.current?.addEventListener("click", expandImage);
    console.log("added event listener");
  }, []);

  function expandImage(e: Event) {
    if(tile.current !== e.target) {
      tile.current?.classList.remove("gallery-expand");
    }

    const selectedImage = e.target as HTMLElement;
    selectedImage?.classList.add("gallery-expand");
  }

  return (
    // <a key={id} href={`/fandom/${id}`}>
    //   <div>
    //     <h1>{title}</h1>
    //     <p>{description}</p>
    //     <img src={img} alt={title} width={200} />
    //   </div>
    // </a>
    <TileLayout ref={tile} src={img} alt={title} width={200} />

  );
}

export default Tile;
