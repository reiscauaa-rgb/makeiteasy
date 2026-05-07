'use client';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import styles from './MapaUSA.module.css';

const geoUrl = '/states-10m.json';

const pins: [number, number][] = [
  [-117.82, 33.68],  // CA - Irvine
  [-122.42, 37.77],  // CA - San Francisco
  [-121.29, 37.95],  // CA - Stockton
  [-73.94,  40.67],  // NY - Brooklyn
  [-72.8,   41.5 ],  // NY - Bronx
  [-72.1,   40.2 ],  // NY - Garden City
  [-85.00,  41.63],  // IN - Angola
  [-85.67,  40.10],  // IN - Anderson
  [-90.19,  38.62],  // MO - St. Louis
  [-95.26,  38.61],  // KS - Ottawa
  [-112.36, 33.62],  // AZ - Surprise
  [-88.10,  43.06],  // WI - Brookfield
  [-76.88,  40.27],  // PA - Harrisburg
  [-84.16,  36.74],  // KY - Williamsburg
  [-89.2,   41.2 ],  // IL - Lisle
  [-87.62,  41.87],  // IL - Chicago
  [-98.5,   32.2 ],  // TX - Fort Worth
  [-96.0,   33.3 ],  // TX - Dallas
  [-77.03,  38.90],  // DC
  [-78.5,   37.8 ],  // VA - Falls Church
  [-81.37,  28.53],  // FL - Orlando
  [-115.13, 36.16],  // NV - Las Vegas
  [-111.65, 40.23],  // UT - Provo
  [-75.0,   39.5 ],  // NJ - West New York
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
