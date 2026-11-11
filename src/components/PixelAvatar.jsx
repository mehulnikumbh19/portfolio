// Pixel CRT monitor showing a shell prompt with a violet cursor. The same
// 16x16 map is rendered to the favicons in public/, so keep them in sync.
export default function PixelAvatar({ size = 56, className = "" }) {
  return (
    <svg
      role="img"
      aria-label="Pixel terminal logo"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      className={className}
    >
      <rect width="16" height="16" fill="#ff9f3f" />
      {/* Monitor frame and title bar */}
      <rect x="1" y="2" width="14" height="12" fill="#050505" />
      <rect x="9" y="3" width="1" height="1" fill="#ff9f3f" />
      <rect x="11" y="3" width="1" height="1" fill="#ff9f3f" />
      <rect x="13" y="3" width="1" height="1" fill="#ff9f3f" />
      {/* Screen */}
      <rect x="2" y="5" width="12" height="8" fill="#fffdf4" />
      {/* Prompt chevron */}
      <path d="M3 7h1v1H3zM4 8h1v1H4zM3 9h1v1H3z" fill="#050505" />
      {/* Cursor */}
      <rect x="6" y="8" width="2" height="2" fill="#7c3aed" />
      {/* Stand */}
      <rect x="6" y="14" width="4" height="1" fill="#050505" />
      <rect x="4" y="15" width="8" height="1" fill="#050505" />
    </svg>
  );
}
