'use client';

import { useState, useCallback } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import styles from './MapaUSA.module.css';

/* ─── Types ──────────────────────────────────────── */
type University = {
  id: string;
  state: string;
  city: string;
  name: string;
  courses: string;
  coordinates: [number, number]; // [longitude, latitude]
};

/* ─── Data ───────────────────────────────────────── */
const geoUrl = '/states-10m.json';

const universities: University[] = [
  // California
  { id: 'ca-irvine',    state: 'California', city: 'Irvine',         name: 'Westcliff University',          courses: 'Negócios / Tecnologia',            coordinates: [-117.82, 33.68] },
  { id: 'ca-sf',        state: 'California', city: 'San Francisco',   name: 'Golden Gate University',        courses: 'Negócios / Tecnologia / Direito',  coordinates: [-122.42, 37.77] },
  { id: 'ca-stockton',  state: 'California', city: 'Stockton',        name: 'Humphreys University',          courses: 'Direito / Negócios / Educação',    coordinates: [-121.29, 37.95] },
  
  // New York Area
  { id: 'ny-brooklyn',  state: 'New York',   city: 'Brooklyn',        name: 'St. Francis College',           courses: 'Negócios / Ciências da Saúde',     coordinates: [-73.94, 40.67] },
  { id: 'ny-bronx',     state: 'New York',   city: 'Bronx',           name: 'Monroe University',             courses: 'Negócios / Hospitalidade / TI',    coordinates: [-72.8, 41.5] },
  { id: 'ny-garden',    state: 'New York',   city: 'Garden City',     name: 'Adelphi University',            courses: 'Negócios / Saúde / STEM',          coordinates: [-72.1, 40.2] },
  
  // Indiana
  { id: 'in-angola',    state: 'Indiana',    city: 'Angola',          name: 'Trine University',              courses: 'Engenharia / Computação / Saúde',  coordinates: [-85.00, 41.63] },
  { id: 'in-anderson',  state: 'Indiana',    city: 'Anderson',        name: 'Anderson University',           courses: 'Negócios / Enfermagem / Cibersegurança', coordinates: [-85.67, 40.10] },
  
  // Missouri
  { id: 'mo-stlouis',   state: 'Missouri',   city: 'St. Louis',       name: 'Washington University in St. Louis', courses: 'Cursos variados',           coordinates: [-90.19, 38.62] },
  // Kansas
  { id: 'ks-ottawa',    state: 'Kansas',     city: 'Ottawa',          name: 'Ottawa University',             courses: 'Negócios / Counseling / Saúde',    coordinates: [-95.26, 38.61] },
  // Arizona
  { id: 'az-surprise',  state: 'Arizona',    city: 'Surprise',        name: 'Ottawa University',             courses: 'Negócios / Counseling / Saúde',    coordinates: [-112.36, 33.62] },
  // Wisconsin
  { id: 'wi-brookfield',state: 'Wisconsin',  city: 'Brookfield',      name: 'Ottawa University',             courses: 'Negócios / Educação / Counseling', coordinates: [-88.10, 43.06] },
  // Pennsylvania
  { id: 'pa-harrisburg',state: 'Pennsylvania', city: 'Harrisburg',    name: 'Harrisburg University',         courses: 'STEM / Analytics / Computer Science', coordinates: [-76.88, 40.27] },
  // Kentucky
  { id: 'ky-wmsburg',   state: 'Kentucky',   city: 'Williamsburg',    name: 'University of the Cumberlands', courses: 'TI / Negócios / Educação',         coordinates: [-84.16, 36.74] },
  
  // Illinois
  { id: 'il-lisle',     state: 'Illinois',   city: 'Lisle',           name: 'Benedictine University',        courses: 'Negócios / Saúde / Cursos variados', coordinates: [-89.2, 41.2] },
  { id: 'il-chicago',   state: 'Illinois',   city: 'Chicago',         name: 'National Louis University',     courses: 'Educação / Negócios',              coordinates: [-87.62, 41.87] },
  
  // Texas
  { id: 'tx-fw',        state: 'Texas',      city: 'Fort Worth',      name: 'Texas Wesleyan University',     courses: 'Negócios / Saúde / Direito',       coordinates: [-98.5, 32.2] },
  { id: 'tx-dallas',    state: 'Texas',      city: 'Dallas',          name: 'Westcliff University',          courses: 'Negócios / Tecnologia (pós)',      coordinates: [-96.0, 33.3] },
  
  // DC/Virginia Area
  { id: 'dc-wash',      state: 'DC',         city: 'Washington D.C.', name: 'University of the Potomac',     courses: 'Gestão / TI / Negócios',          coordinates: [-77.03, 38.90] },
  { id: 'va-falls',     state: 'Virginia',   city: 'Falls Church',    name: 'University of the Potomac',     courses: 'Gestão / TI / Negócios',          coordinates: [-78.5, 37.8] },
  
  // Other States
  { id: 'fl-orlando',   state: 'Florida',    city: 'Orlando',         name: 'UCEDA School',                  courses: 'Inglês Intensivo / ESL',           coordinates: [-81.37, 28.53] },
  { id: 'nv-lv',        state: 'Nevada',     city: 'Las Vegas',       name: 'UCEDA School',                  courses: 'Inglês Intensivo / ESL',           coordinates: [-115.13, 36.16] },
  { id: 'ut-provo',     state: 'Utah',       city: 'Provo',           name: 'UCEDA School',                  courses: 'Inglês Intensivo / ESL',           coordinates: [-111.65, 40.23] },
  { id: 'nj-wny',       state: 'New Jersey', city: 'West New York',   name: 'UCEDA School',                  courses: 'Inglês Intensivo / ESL',           coordinates: [-75.0, 39.5] },
];

/* ─── Component ──────────────────────────────────── */
export default function MapaUSA() {
  const [active, setActive] = useState<University | null>(null);

  const toggle = useCallback((u: University) => {
    setActive(prev => (prev?.id === u.id ? null : u));
  }, []);

  const close = () => setActive(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.mapContainer}>
        {/* Real Composable Vector Map */}
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

          {/* Render Pins */}
          {universities.map((u) => (
            <Marker key={u.id} coordinates={u.coordinates}>
              <g
                className={styles.pinGroup}
                onClick={() => toggle(u)}
                role="button"
                tabIndex={0}
                aria-label={`${u.name} em ${u.city}, ${u.state}`}
                onKeyDown={(e) => e.key === 'Enter' && toggle(u)}
              >
                {/* Pulse ring */}
                <circle
                  r={12}
                  className={styles.pulse}
                  style={{ animationDelay: `${Math.random() * 2}s` }}
                />
                {/* Pin dot */}
                <circle
                  r={5}
                  className={`${styles.pin} ${active?.id === u.id ? styles.pinActive : ''}`}
                />
              </g>

            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* Painel Lateral de Informações */}
      <div className={styles.sidePanel}>
        {active ? (
          <div className={styles.panelContent}>
            <div className={styles.panelInfoMain}>
              <p className={styles.panelState}>{active.state}</p>
              <p className={styles.panelCity}>
                <span className={styles.pinEmoji}>📍</span>
                <span>{active.city}</span>
              </p>
              <h3 className={styles.panelName}>{active.name}</h3>
            </div>
            
            <div className={styles.panelDetailBox}>
              <p className={styles.panelLabel}>Áreas de Estudo</p>
              <p className={styles.panelCourses}>{active.courses}</p>
            </div>
            
            <button className={styles.closeBtn} onClick={close}>Ocultar</button>
          </div>
        ) : (
          <div className={styles.panelEmpty}>
            <p>Selecione um pino no mapa para ver os detalhes da instituição.</p>
          </div>
        )}
      </div>

      <p className={styles.hint} style={{ display: 'none' }}>Clique em um pino para ver a universidade</p>
    </div>
  );
}
