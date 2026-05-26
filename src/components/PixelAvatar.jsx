export default function PixelAvatar({ size = 56, className = "" }) {
  return (
    <svg
      role="img"
      aria-label="Pixel shield avatar with initials M N"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      className={className}
    >
      <rect width="16" height="16" fill="#ff9f3f" />
      <path
        d="M3 2 H13 V3 H14 V11 L8 14 L2 11 V3 H3 Z"
        fill="#050505"
      />
      <path d="M4 4 H12 V10 L8 12 L4 10 Z" fill="#fffdf4" />
      <path d="M5 5 H6 V6 H7 V7 H8 V6 H9 V5 H10 V9 H9 V7 H8 V8 H7 V7 H6 V9 H5 Z" fill="#050505" />
      <rect x="2" y="2" width="1" height="1" fill="#050505" />
      <rect x="13" y="2" width="1" height="1" fill="#050505" />
    </svg>
  );
}
