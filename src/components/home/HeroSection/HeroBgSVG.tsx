export default function HeroBgSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
      aria-hidden="true"
    >
      <defs>
        {/* Main purple background gradient */}
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3d1a78" />
          <stop offset="50%" stopColor="#5b2da6" />
          <stop offset="100%" stopColor="#7c3fd4" />
        </linearGradient>

        {/* Blob radial gradients */}
        <radialGradient id="blob1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9d4edd" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#5b2da6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blob2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c77dff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#5b2da6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blob3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e0aaff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#5b2da6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blobCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7b2ff7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#5b2da6" stopOpacity="0" />
        </radialGradient>

        {/* Sticker drop shadow */}
        <filter id="stickerShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.4)" />
        </filter>

        {/* Glow for illustrations */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <style>{`
          @keyframes svgFloat1 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-14px); }
          }
          @keyframes svgFloat2 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes svgFloat3 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-12px) rotate(3deg); }
            66% { transform: translateY(-5px) rotate(-2deg); }
          }
          @keyframes svgFloat4 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-8px) rotate(-3deg); }
            66% { transform: translateY(-4px) rotate(2deg); }
          }
          @keyframes svgBlobPulse {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          .float1 { animation: svgFloat1 6s ease-in-out infinite; }
          .float2 { animation: svgFloat2 7s ease-in-out infinite 1s; }
          .float3 { animation: svgFloat3 5s ease-in-out infinite 0.5s; }
          .float4 { animation: svgFloat4 6.5s ease-in-out infinite 2s; }
          .blobPulse { animation: svgBlobPulse 8s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* ── Base background ── */}
      <rect width="1440" height="900" fill="url(#bgGrad)" />

      {/* ── Decorative blobs ── */}
      <ellipse className="blobPulse" cx="200" cy="180" rx="280" ry="220" fill="url(#blob1)" />
      <ellipse className="blobPulse" cx="1240" cy="150" rx="260" ry="200" fill="url(#blob2)" />
      <ellipse cx="720" cy="500" rx="350" ry="280" fill="url(#blobCenter)" />
      <ellipse cx="120" cy="700" rx="200" ry="180" fill="url(#blob3)" />
      <ellipse cx="1380" cy="750" rx="220" ry="190" fill="url(#blob1)" />

      {/* ── Bottom wave ── */}
      <path
        d="M0,840 C240,780 480,900 720,860 C960,820 1200,900 1440,840 L1440,900 L0,900 Z"
        fill="rgba(0,0,0,0.15)"
      />
      <path
        d="M0,860 C300,800 600,900 900,860 C1100,835 1300,900 1440,860 L1440,900 L0,900 Z"
        fill="rgba(0,0,0,0.1)"
      />

      {/* ────────────────────────────────────────────────────────
          LEFT SIDE — Statue of Liberty (sticker style)
          ──────────────────────────────────────────────────────── */}
      <g className="float1" style={{ transformOrigin: '230px 560px' }} filter="url(#stickerShadow)">
        {/* White border sticker outline */}
        <g fill="white">
          {/* Torch arm */}
          <path d="M268,290 L278,265 L260,260 L250,285 Z" />
          {/* Torch flame base */}
          <ellipse cx="269" cy="258" rx="14" ry="10" />
          {/* Body */}
          <path d="M210,430 C205,380 215,340 230,310 L270,310 C285,340 295,380 290,430 Z" />
          {/* Robe folds */}
          <rect x="208" y="430" width="84" height="120" rx="4" />
          {/* Head */}
          <ellipse cx="250" cy="295" rx="28" ry="32" />
          {/* Crown points */}
          <polygon points="250,263 244,245 250,258 256,245" />
          <polygon points="234,268 222,252 232,263 228,250" />
          <polygon points="266,268 278,252 268,263 272,250" />
          {/* Left arm with book */}
          <path d="M212,370 L170,390 L165,380 L210,358 Z" />
          <rect x="145" y="378" width="30" height="22" rx="2" fill="white" />
        </g>
        {/* Grey tones on top of white for the statue look */}
        <g fill="#c0b8d8" opacity="0.85">
          <path d="M212,432 C207,382 217,342 232,312 L268,312 C283,342 293,382 288,432 Z" />
          <rect x="210" y="432" width="80" height="116" rx="3" />
          <ellipse cx="250" cy="297" rx="25" ry="28" />
          <path d="M270,292 L280,267 L263,262 L253,287 Z" />
          <ellipse cx="271" cy="260" rx="11" ry="8" fill="#e8d44d" />
          <path d="M214,372 L172,392 L168,382 L212,360 Z" />
          <rect x="148" y="380" width="26" height="18" rx="2" fill="#d0c8e8" />
        </g>
      </g>

      {/* ── Graduation Cap (left side, above statue) ── */}
      <g className="float3" style={{ transformOrigin: '185px 230px' }} filter="url(#glow)">
        {/* Cap board */}
        <rect x="148" y="215" width="74" height="10" rx="2" fill="white" />
        {/* Cap top */}
        <polygon points="185,190 148,215 222,215" fill="white" />
        {/* Tassel */}
        <line x1="222" y1="220" x2="235" y2="248" stroke="white" strokeWidth="2.5" />
        <circle cx="235" cy="252" r="4" fill="#ff8c32" />
        {/* Sparkles */}
        <g fill="white" opacity="0.9">
          <circle cx="130" cy="200" r="3" />
          <circle cx="240" cy="185" r="2" />
          <circle cx="145" cy="175" r="2.5" />
          <circle cx="235" cy="230" r="2" />
        </g>
      </g>

      {/* ────────────────────────────────────────────────────────
          RIGHT SIDE — Hand holding Diploma (sticker style)
          ──────────────────────────────────────────────────────── */}
      <g className="float2" style={{ transformOrigin: '1210px 520px' }} filter="url(#stickerShadow)">
        {/* White outline / sticker border */}
        <g fill="white">
          {/* Hand shape */}
          <path d="M1170,580 C1165,540 1168,500 1175,470 L1195,465 C1200,490 1198,520 1200,545 C1215,520 1225,490 1230,465 L1248,468 C1245,500 1238,530 1235,560 L1240,590 Z" />
          {/* Wrist */}
          <path d="M1170,580 L1240,590 L1245,620 L1165,615 Z" />
          {/* Diploma scroll */}
          <rect x="1145" y="430" width="130" height="52" rx="8" />
          <ellipse cx="1145" cy="456" rx="14" ry="26" />
          <ellipse cx="1275" cy="456" rx="14" ry="26" />
        </g>
        {/* Grey tones */}
        <g fill="#b0a8cc" opacity="0.85">
          <path d="M1173,578 C1168,538 1171,498 1178,468 L1193,463 C1198,488 1196,518 1198,543 C1213,518 1223,488 1228,463 L1245,466 C1242,498 1235,528 1232,558 L1237,588 Z" />
          <path d="M1173,578 L1237,588 L1242,618 L1168,613 Z" />
        </g>
        {/* Diploma scroll detail */}
        <rect x="1148" y="433" width="124" height="46" rx="6" fill="#ede8f8" opacity="0.9" />
        <ellipse cx="1148" cy="456" rx="12" ry="23" fill="#d4c8f0" />
        <ellipse cx="1272" cy="456" rx="12" ry="23" fill="#d4c8f0" />
        {/* Lines on diploma */}
        <line x1="1168" y1="446" x2="1252" y2="446" stroke="#9b7ecc" strokeWidth="2" opacity="0.6" />
        <line x1="1168" y1="456" x2="1252" y2="456" stroke="#9b7ecc" strokeWidth="1.5" opacity="0.5" />
        <line x1="1168" y1="465" x2="1252" y2="465" stroke="#9b7ecc" strokeWidth="1.5" opacity="0.5" />
        {/* Ribbon bow */}
        <path d="M1202,445 C1196,440 1188,444 1190,456 C1188,468 1196,472 1202,467 C1208,472 1216,468 1214,456 C1216,444 1208,440 1202,445 Z" fill="#ff8c32" opacity="0.9" />
        <circle cx="1202" cy="456" r="4" fill="#e06000" />
      </g>

      {/* ── Paper Airplane (top right) ── */}
      <g className="float4" style={{ transformOrigin: '1310px 170px' }}>
        {/* Dashed flight path loop */}
        <path
          d="M1360,130 C1390,100 1420,140 1400,170 C1380,200 1340,210 1320,185 C1300,160 1310,130 1340,120"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="6,5"
          opacity="0.6"
        />
        {/* Paper plane body */}
        <g fill="white" filter="url(#glow)">
          <polygon points="1360,130 1295,155 1320,165" />
          <polygon points="1360,130 1320,165 1340,175 1355,158" />
          <polygon points="1320,165 1295,155 1310,175" />
        </g>
        <polygon points="1360,130 1320,165 1330,158" fill="#e0d0ff" opacity="0.7" />
      </g>

      {/* ── Subtle dot grid overlay ── */}
      <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1" fill="white" opacity="0.06" />
      </pattern>
      <rect width="1440" height="900" fill="url(#dots)" />
    </svg>
  );
}
