'use client';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import styles from './MapaUSA.module.css';

const geoUrl = '/states-10m.json';

const pins: [number, number][] = [
  [-119.45, 36.78],  // California
  [-81.37,  28.53],  // Florida
  [-111.95, 33.45],  // Arizona
  [-97.75,  31.97],  // Texas
  [-77.46,  37.54],  // Virginia
  [-74.00,  40.71],  // New York
  [-81.03,  34.00],  // South Carolina
  [-76.88,  40.27],  // Pennsylvania
  [-89.40,  43.07],  // Wisconsin
  [-95.26,  38.61],  // Kansas
  [-77.03,  38.90],  // Washington DC
  [-89.20,  41.88],  // Illinois
];

export default function MapaUSA() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mapContainer}>
        <ComposableMap projection="geoAlbersUsa" className={styles.svgMap}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className={styles.geography}
                />
              ))
            }
          </Geographies>

          {pins.map((coords, i) => (
            <Marker key={i} coordinates={coords}>
              <circle
                r={12}
                className={styles.pulse}
                style={{ animationDelay: `${(i * 0.3) % 2}s` }}
              />
              <circle r={5} className={styles.pin} />
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
}
