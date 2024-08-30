import React, { useEffect, useRef } from 'react';

const CustomMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: -7.0129602, lng: 110.6384425 },
      zoom: 16,
      styles: [
        {
          elementType: 'geometry',
          stylers: [{ color: '#e5e5e5' }],
        },
        {
          elementType: 'labels.icon',
          stylers: [{ visibility: 'off' }],
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{ color: '#616161' }],
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#f5f5f5' }],
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#c5e1a5' }],
        },
        {
          featureType: 'poi',
          elementType: 'labels.text',
          stylers: [{ color: '#5b5b5b' }],
        },
      ],
    });

    new window.google.maps.Marker({
      position: { lat: -7.0129602, lng: 110.6384425 },
      map,
      title: 'Curug, Kec. Tegowanu, Kabupaten Grobogan, Jawa Tengah',
    });
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '300px' }} />;
};

export default CustomMap;
