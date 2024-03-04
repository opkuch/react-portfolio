const PAGE_BG =
  'url(https://res.cloudinary.com/dubayogn0/image/upload/v1709558850/bg_2_scqzpw.webp)'

export function PageBg() {
  return (
    <div
      className="page-bg"
      style={{
        backgroundImage: PAGE_BG,
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(100%)',
        opacity: 0.15,
        pointerEvents: 'none',
      }}
    ></div>
  )
}
