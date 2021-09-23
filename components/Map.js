import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  // transform searchResults objects int the objects we require ie lat long
  const coordinates = searchResults?.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/bulaveur/ckttcs8yd07dw17pgui8zku37"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewPort}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2d xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {/* this popu should showif we click on a popup */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
              closeOnClick={true}
            >
              {result.title}{" "}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
