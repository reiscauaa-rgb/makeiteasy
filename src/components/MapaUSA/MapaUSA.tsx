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
  price: string;
  coordinates: [number, number]; // [longitude, latitude]
};

/* ─── Data ───────────────────────────────────────── */
const geoUrl = '/states-10m.json';

const universities: University[] = [
  // California
  { id: 'ca-irvine',    state: 'California', city: 'Irvine',         name: 'Westcliff University',          courses: 'Negócios / Tecnologia',            price: 'a partir de $1.534/mês', coordinates: [-117.82, 33.68] },
  { id: 'ca-sf',        state: 'California', city: 'San Francisco',   name: 'Golden Gate University',        courses: 'Negócios / Tecnologia / Direito',   price: 'a partir de $924/mês',   coordinates: [-122.42, 37.77] },
  { id: 'ca-stockton',  state: 'California', city: 'Stockton',        name: 'Humphreys University',          courses: 'Direito / Negócios / Educação',     price: 'a partir de $375/unidade', coordinates: [-121.29, 37.95] },
  
  // New York Area (Espalhados)
  { id: 'ny-brooklyn',  state: 'New York',   city: 'Brooklyn',        name: 'St. Francis College',           courses: 'Negócios / Ciências da Saúde',      price: 'a partir de $2.542/mês', coordinates: [-73.94, 40.67] },
  { id: 'ny-bronx',     state: 'New York',   city: 'Bronx',           name: 'Monroe University',             courses: 'Negócios / Hospitalidade / TI',     price: 'a partir de $1.402/mês', coordinates: [-72.8, 41.5] }, // Movido NE
  { id: 'ny-garden',    state: 'New York',   city: 'Garden City',     name: 'Adelphi University',            courses: 'Negócios / Saúde / STEM',           price: 'a partir de $4.342/mês', coordinates: [-72.1, 40.2] }, // Movido E
  
  // Indiana
  { id: 'in-angola',    state: 'Indiana',    city: 'Angola',          name: 'Trine University',              courses: 'Engenharia / Computação / Saúde',   price: 'a partir de $3.071/mês', coordinates: [-85.00, 41.63] },
  { id: 'in-anderson',  state: 'Indiana',    city: 'Anderson',        name: 'Anderson University',           courses: 'Negócios / Enfermagem / Cibersegurança', price: 'a partir de $1.956/mês', coordinates: [-85.67, 40.10] },
  
  // Missouri
  { id: 'mo-stlouis',   state: 'Missouri',   city: 'St. Louis',       name: 'Washington University in St. Louis', courses: 'Cursos variados',            price: 'a partir de $5.687/mês', coordinates: [-90.19, 38.62] },
  // Kansas
  { id: 'ks-ottawa',    state: 'Kansas',     city: 'Ottawa',          name: 'Ottawa University',             courses: 'Negócios / Counseling / Saúde',     price: 'a partir de $2.658/mês', coordinates: [-95.26, 38.61] },
  // Arizona
  { id: 'az-surprise',  state: 'Arizona',    city: 'Surprise',        name: 'Ottawa University',             courses: 'Negócios / Counseling / Saúde',     price: 'a partir de $2.658/mês', coordinates: [-112.36, 33.62] },
  // Wisconsin
  { id: 'wi-brookfield',state: 'Wisconsin',  city: 'Brookfield',      name: 'Ottawa University',             courses: 'Negócios / Educação / Counseling',  price: 'a partir de $998/mês',   coordinates: [-88.10, 43.06] },
  // Pennsylvania
  { id: 'pa-harrisburg',state: 'Pennsylvania', city: 'Harrisburg',    name: 'Harrisburg University',         courses: 'STEM / Analytics / Computer Science', price: 'a partir de $2.050/mês', coordinates: [-76.88, 40.27] },
  // Kentucky
  { id: 'ky-wmsburg',   state: 'Kentucky',   city: 'Williamsburg',    name: 'University of the Cumberlands', courses: 'TI / Negócios / Educação',          price: 'a partir de $823/mês',   coordinates: [-84.16, 36.74] },
  
  // Illinois (Espalhados)
  { id: 'il-lisle',     state: 'Illinois',   city: 'Lisle',           name: 'Benedictine University',        courses: 'Negócios / Saúde / Cursos variados', price: 'a partir de $3.288/mês', coordinates: [-89.2, 41.2] },
  { id: 'il-chicago',   state: 'Illinois',   city: 'Chicago',         name: 'National Louis University',     courses: 'Educação / Negócios',              price: 'a partir de $1.016/mês', coordinates: [-87.62, 41.87] },
  
  // Texas (Espalhados)
  { id: 'tx-fw',        state: 'Texas',      city: 'Fort Worth',      name: 'Texas Wesleyan University',     courses: 'Negócios / Saúde / Direito',        price: 'a partir de $2.970/mês', coordinates: [-98.5, 32.2] },
  { id: 'tx-dallas',    state: 'Texas',      city: 'Dallas',          name: 'Westcliff University',          courses: 'Negócios / Tecnologia (pós)',       price: 'a partir de $1.228/mês', coordinates: [-96.0, 33.3] },
  
  // DC/Virginia Area (Espalhados)
  { id: 'dc-wash',      state: 'DC',         city: 'Washington D.C.', name: 'University of the Potomac',     courses: 'Gestão / TI / Negócios',           price: 'a partir de $1.258/mês', coordinates: [-77.03, 38.90] },
  { id: 'va-falls',     state: 'Virginia',   city: 'Falls Church',    name: 'University of the Potomac',     courses: 'Gestão / TI / Negócios',           price: 'a partir de $1.258/mês', coordinates: [-78.5, 37.8] },
  
  // Other States
  { id: 'fl-orlando',   state: 'Florida',    city: 'Orlando',         name: 'UCEDA School',                  courses: 'Inglês Intensivo / ESL',            price: 'a partir de $550/mês',   coordinates: [-81.37, 28.53] },
  { id: 'nv-lv',        state: 'Nevada',     city: 'Las Vegas',       name: 'UCEDA School',                  courses: 'Inglês Intensivo / ESL',            price: 'a partir de $550/mês',   coordinates: [-115.13, 36.16] },
  { id: 'ut-provo',     state: 'Utah',       city: 'Provo',           name: 'UCEDA School',                  courses: 'Inglês Intensivo / ESL',            price: 'a partir de $550/mês',   coordinates: [-111.65, 40.23] },
  { id: 'nj-wny',       state: 'New Jersey', city: 'West New York',   name: 'UCEDA School',                  courses: 'Inglês Intensivo / ESL',            price: 'a partir de $550/mês',   coordinates: [-75.0, 39.5] }, // Afastado de NY
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
              <p className={styles.panelCity}>📍 {active.city}</p>
              <h3 className={styles.panelName}>{active.name}</h3>
            </div>
            
            <div className={styles.panelDetailBox}>
              <p className={styles.panelLabel}>Áreas de Estudo</p>
              <p className={styles.panelCourses}>{active.courses}</p>
            </div>

            <div className={styles.panelDetailBox}>
              <p className={styles.panelLabel}>Investimento Estimado</p>
              <p className={styles.panelPrice}>{active.price}</p>
            </div>
            
            <button className={styles.closeBtn} onClick={close}>Ocultar</button>
          </div>
        ) : (
          <div className={styles.panelEmpty}>
            <span className={styles.emptyIcon}>👈</span>
            <p>Selecione um pino no mapa para ver os detalhes da instituição.</p>
          </div>
        )}
      </div>

      <p className={styles.hint} style={{ display: 'none' }}>Clique em um pino para ver a universidade</p>
    </div>
  );
}
