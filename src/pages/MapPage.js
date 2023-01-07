import React, { useState } from "react";
import Footer from "../layout/Footer";
import Map, { Marker } from "react-map-gl";
import mapMarker from "../assests/map_marker_icon.png";
import EventPopUp from "../components/EventPopUp";
import eventPhoto1 from "../assests/event_photo1.jpg"
import eventPhoto2 from "../assests/event_photo2.jpg"
import mapboxgl from "!mapbox-gl"

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const MapPage = () => { 
  const [showEventInfo1, setShowEventInfo1] = useState(false);
  const [showEventInfo2, setShowEventInfo2] = useState(false);

  const markerClickHandler1 = (e) => {
    setShowEventInfo1(true);
  };
  const markerClickHandler2 = (e) => {
    setShowEventInfo2(true)
  };
  const handlePopUpClose = () => {
    setShowEventInfo1(false);
    setShowEventInfo2(false);
  };
  return (
    <div className="flex flex-col bg-slate-500 justify-center w-screen h-screen  ">
      <div className=" relative m-auto w-[390px] h-[844px] inset-0">
        {showEventInfo1 && (
          <EventPopUp
          eventStatusColor="text-red-300"
            onClick={handlePopUpClose}
            eventStatus="Inactive Hub"
            eventTime="May 13th at 5pm"
            eventMilage="1.1 miles away"
            eventAttendence="54 RSVP'S"
            eventTitle="UCLA Alumni Event"
            eventPhoto={eventPhoto1}
            eventAddress="2615 Whilshire Blvd, Santa Monica, CA 90403"
            eventDescription="An event for UCLA Alumni residing in West Los Angeles to connect, chat, and make lasting relationships. We can't wait to see you!"
            eventAction="RSVP"
            eventActionColor="bg-red-500"
          />
        )}
        {showEventInfo2 && (
          <EventPopUp
          eventStatusColor="text-green-600"
            onClick={handlePopUpClose}
            eventStatus="Avtive Hub"
            eventTime="Closes at 2am"
            eventMilage="1.1 miles away"
            eventAttendence="75 RSVP'S"
            eventTitle="New Immigrants Event"
            eventPhoto={eventPhoto2}
            eventAddress="2615 Whilshire Blvd, Santa Monica, CA 90403"
            eventDescription="An event for new immigrants residing in West Los Angeles to connect, chat, and make lasting relationships. We can't wait to see you!"
            eventAction="Navigate Me"
            eventActionColor="bg-green-600"
          />
        )}
        <Map
          mapboxAccessToken="pk.eyJ1IjoibXJob3BlbGEiLCJhIjoiY2xjbDg2eTdvMDZudTNvbm03bmNtbW94ayJ9.5BOLpEOlPNKoDiy2XF0Ekg"
          initialViewState={{
            longitude: -118.441002,
            latitude: 34.05318,
            zoom: 14,
          }}
          style={{ width: 390, height: 840 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker
            onClick={markerClickHandler1}
            offsetTop={-16}
            offsetLeft={-16 / 2}
            longitude={-118.444435}
            latitude={34.058954}
            anchor="top"
            pitchAlignment="viewport"
          >
            <img className="w-16 h-16" src={mapMarker} alt="marker" />
          </Marker>
          <Marker
            onClick={markerClickHandler2}
            offsetTop={-16}
            offsetLeft={-16 / 2}
            longitude={-118.444435}
            latitude={34.05896}
            anchor="bottom"
            pitchAlignment="viewport"
          >
            <img className="w-16 h-16" src={mapMarker} alt="marker" />
          </Marker>
        </Map>

        <Footer className="bg-white z-10" />
      </div>
    </div>
  );
};

export default MapPage;
