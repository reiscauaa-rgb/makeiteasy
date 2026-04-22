'use client';

import { useState } from 'react';
import Image from 'next/image';

const universities = [
  { id: 'ca-irvine', state: 'California', city: 'Irvine', name: 'Westcliff University' },
  { id: 'ca-sf', state: 'California', city: 'San Francisco', name: 'Golden Gate University' },
  { id: 'ca-stockton', state: 'California', city: 'Stockton', name: 'Humphreys University' },
  { id: 'ny-brooklyn', state: 'New York', city: 'Brooklyn', name: 'St. Francis College' },
  { id: 'ny-bronx', state: 'New York', city: 'Bronx', name: 'Monroe University' },
  { id: 'ny-garden', state: 'New York', city: 'Garden City', name: 'Adelphi University' },
  { id: 'in-angola', state: 'Indiana', city: 'Angola', name: 'Trine University' },
  { id: 'in-anderson', state: 'Indiana', city: 'Anderson', name: 'Anderson University' },
  { id: 'mo-stlouis', state: 'Missouri', city: 'St. Louis', name: 'Washington University' },
  { id: 'ks-ottawa', state: 'Kansas', city: 'Ottawa', name: 'Ottawa University' },
  { id: 'az-surprise', state: 'Arizona', city: 'Surprise', name: 'Ottawa University' },
  { id: 'wi-brookfield', state: 'Wisconsin', city: 'Brookfield', name: 'Ottawa University' },
  { id: 'pa-harrisburg', state: 'Pennsylvania', city: 'Harrisburg', name: 'Harrisburg University' },
  { id: 'ky-wmsburg', state: 'Kentucky', city: 'Williamsburg', name: 'Univ of the Cumberlands' },
  { id: 'il-lisle', state: 'Illinois', city: 'Lisle', name: 'Benedictine University' },
  { id: 'il-chicago', state: 'Illinois', city: 'Chicago', name: 'National Louis University' },
  { id: 'tx-fw', state: 'Texas', city: 'Fort Worth', name: 'Texas Wesleyan University' },
  { id: 'tx-dallas', state: 'Texas', city: 'Dallas', name: 'Westcliff University' },
  { id: 'dc-wash', state: 'DC', city: 'Washington D.C.', name: 'Univ of the Potomac' },
  { id: 'va-falls', state: 'Virginia', city: 'Falls Church', name: 'Univ of the Potomac' },
  { id: 'fl-orlando', state: 'Florida', city: 'Orlando', name: 'UCEDA School' },
  { id: 'nv-lv', state: 'Nevada', city: 'Las Vegas', name: 'UCEDA School' },
  { id: 'ut-provo', state: 'Utah', city: 'Provo', name: 'UCEDA School' },
  { id: 'nj-wny', state: 'New Jersey', city: 'West New York', name: 'UCEDA School' },
];

export default function MapaDev() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [coords, setCoords] = useState<Record<string, {cx: number, cy: number}>>({});

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const cursorPt = pt.matrixTransform(svg.getScreenCTM()?.inverse());

    if (activeIdx < universities.length) {
      const u = universities[activeIdx];
      setCoords(prev => ({
        ...prev,
        [u.id]: { cx: Math.round(cursorPt.x), cy: Math.round(cursorPt.y) }
      }));
      setActiveIdx(i => i + 1);
    }
  };

  const getResult = () => {
    return universities.map(u => {
      const c = coords[u.id] || { cx: 0, cy: 0 };
      return `{ id: '${u.id}', cx: ${c.cx}, cy: ${c.cy} }`;
    }).join(",\n");
  };

  return (
    <div style={{ padding: '50px', display: 'flex', gap: '30px', background: '#000', color: '#fff', minHeight: '100vh' }}>
      
      <div style={{ flex: 1, position: 'relative' }}>
        <h2 style={{fontSize:'20px', marginBottom:'10px'}}>Clique no mapa para marcar as posições:</h2>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '960/500' }}>
          <Image src="/images/mapa.avif" alt="" fill style={{ objectFit: 'contain' }} />
          <svg 
            viewBox="0 0 960 500" 
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', cursor: 'crosshair', border: '1px solid #333' }}
            onClick={handleClick}
          >
            {Object.entries(coords).map(([id, c]) => (
              <circle key={id} cx={c.cx} cy={c.cy} r={8} fill="#ff6b2b" stroke="#fff" />
            ))}
          </svg>
        </div>
      </div>

      <div style={{ width: '350px' }}>
        <div style={{ background: '#222', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{marginBottom:'15px'}}>Posicione:</h3>
          {activeIdx < universities.length ? (
            <div style={{ background: '#ff6b2b', padding: '15px', borderRadius: '8px', fontWeight: 'bold' }}>
              AGORA CLIQUE EM:<br/><br/>
              {universities[activeIdx].city}, {universities[activeIdx].state} ({universities[activeIdx].name})
            </div>
          ) : (
            <div style={{ background: '#4caf50', padding: '15px', borderRadius: '8px', fontWeight: 'bold' }}>
              Todas finalizadas!
            </div>
          )}
          
          <button 
            onClick={() => setActiveIdx(i => Math.max(0, i - 1))}
            style={{ marginTop: '20px', padding: '10px', width: '100%', background: '#444', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Desfazer Último
          </button>

          <textarea 
            readOnly 
            value={getResult()} 
            style={{ width: '100%', height: '300px', marginTop: '20px', background: '#111', color: '#55ff55', padding: '10px', border: '1px solid #333', fontSize: '12px' }}
          />

          <p style={{ fontSize: '12px', marginTop: '10px', color: '#ccc'}}>
            Quando terminar, copie o texto da caixa preta acima e cole no chat para eu aplicar!
          </p>
        </div>
      </div>

    </div>
  );
}
