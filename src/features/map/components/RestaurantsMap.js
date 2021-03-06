import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MapView from 'react-native-maps';
import MapCallout from './MapCallout';
import { Map } from './mapStyles';
import Search from './Search';

export default function RestaurantsMap({ navigation }) {
  const { lat, lng, viewport } = useSelector(
    (state) => state.location.geometry
  );
  const { restaurants } = useSelector((state) => state.restaurants);
  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.01,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.placeId}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.lat,
                longitude: restaurant.geometry.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetails', {
                    restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
}
