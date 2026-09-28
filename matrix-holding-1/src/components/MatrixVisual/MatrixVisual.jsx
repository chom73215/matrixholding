import styles from './MatrixVisual.module.css'

export default function MatrixVisual({ className = '' }) {
  return (
    <div className={[styles.wrapper, className].join(' ')} aria-hidden="true">
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <defs>
          <radialGradient id="matrixGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9A86A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#C9A86A" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A86A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C9A86A" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Glow center */}
        <circle cx="250" cy="250" r="200" fill="url(#matrixGlow)" />

        {/* Outer subtle ring */}
        <circle cx="250" cy="250" r="220" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="250" cy="250" r="160" stroke="rgba(201,168,106,0.15)" strokeWidth="1" />
        <circle cx="250" cy="250" r="90" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="250" cy="250" r="30" stroke="rgba(201,168,106,0.3)" strokeWidth="1" />

        {/* Connecting Matrix Grid Lines */}
        <line x1="50" y1="250" x2="450" y2="250" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="250" y1="50" x2="250" y2="450" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="109" y1="109" x2="391" y2="391" stroke="rgba(201,168,106,0.12)" strokeWidth="1" />
        <line x1="391" y1="109" x2="109" y2="391" stroke="rgba(201,168,106,0.12)" strokeWidth="1" />

        {/* Geometric Hexagons */}
        <polygon
          points="250,110 371,180 371,320 250,390 129,320 129,180"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          fill="none"
          className={styles.rotatingHex}
        />
        <polygon
          points="250,150 337,200 337,300 250,350 163,300 163,200"
          stroke="url(#lineGrad)"
          strokeWidth="1.2"
          fill="none"
          className={styles.rotatingHexRev}
        />

        {/* Matrix Nodes — 3 primary hubs (Network, Connect, Ventures) */}
        {/* Hub 1: Top (Network) */}
        <circle cx="250" cy="110" r="5" fill="#C9A86A" />
        <circle cx="250" cy="110" r="10" stroke="#C9A86A" strokeWidth="1" strokeOpacity="0.4" className={styles.pulsingNode} />
        <text x="250" y="90" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" letterSpacing="2" fontFamily="Inter, sans-serif">NETWORK</text>

        {/* Hub 2: Bottom-Right (Connect) */}
        <circle cx="371" cy="320" r="5" fill="#C9A86A" />
        <circle cx="371" cy="320" r="10" stroke="#C9A86A" strokeWidth="1" strokeOpacity="0.4" className={styles.pulsingNode2} />
        <text x="390" y="338" textAnchor="start" fill="rgba(255,255,255,0.5)" fontSize="9" letterSpacing="2" fontFamily="Inter, sans-serif">CONNECT</text>

        {/* Hub 3: Bottom-Left (Ventures) */}
        <circle cx="129" cy="320" r="5" fill="#C9A86A" />
        <circle cx="129" cy="320" r="10" stroke="#C9A86A" strokeWidth="1" strokeOpacity="0.4" className={styles.pulsingNode3} />
        <text x="110" y="338" textAnchor="end" fill="rgba(255,255,255,0.5)" fontSize="9" letterSpacing="2" fontFamily="Inter, sans-serif">VENTURES</text>

        {/* Minor Data Points */}
        <circle cx="163" cy="200" r="2.5" fill="rgba(255,255,255,0.6)" />
        <circle cx="337" cy="200" r="2.5" fill="rgba(255,255,255,0.6)" />
        <circle cx="337" cy="300" r="2.5" fill="rgba(255,255,255,0.6)" />
        <circle cx="163" cy="300" r="2.5" fill="rgba(255,255,255,0.6)" />

        {/* Center Node: Matrix Holding */}
        <circle cx="250" cy="250" r="6" fill="#FFFFFF" />
        <circle cx="250" cy="250" r="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="250" cy="250" r="24" stroke="rgba(201,168,106,0.3)" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    </div>
  )
}
