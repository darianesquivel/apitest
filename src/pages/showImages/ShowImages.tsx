import React from "react";
import { getInitialImages } from "../utils/imagesFunctions";
import { useQuery } from "react-query";
import MediaCard from "../../components/MediaCard";
import { Image } from "../types";

export default function ShowImages() {
  // comment para darian:
  /**
   * use Query es un estado que reemplaza y facilita el useEffect que se usa para fetchear cosas
   * Esto se configura para mantener refrescada la info
   * Creo que por default tiene algunas config como intervalos para los refreshes
   * también se ejecuta cada vez que cambiamos de ventanas y volvemos a la ventana de nuestro sitio
   * Esto se puede configurar
   */
  const { data: images, status } = useQuery(
    ["initialImages"],
    getInitialImages
  );
  const renderImages =
    status === "success"
      ? images.results?.length
        ? images.results
        : images
      : null;
  return (
    <>
      {!status.includes("succ") && "loading..."}
      {status.includes("error") && "there was an error"}
      {renderImages &&
        renderImages.map((imgObj: Image) => (
          <MediaCard
            image={imgObj.urls.regular}
            description={imgObj.description}
            created_at={imgObj.created_at}
            color={imgObj.color}
            likes={imgObj.likes}
            key={imgObj.id}
          />
        ))}
      );
    </>
  );
}
