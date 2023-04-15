import React from "react"

const Image = ({ src, srcset = null, alt, width = 'max-w-full', height = 'h-auto' }) => {
  return (
    <img
      className={`${width} ${height}`}
      style={{ margin: 'auto' }}
      src={src}
      alt={alt}
    ></img>
  )
}

export default Image
