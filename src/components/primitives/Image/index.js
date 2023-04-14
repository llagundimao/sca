import React from "react"

const Image = ({ src, srcset, alt, width = 'max-w-full', height = 'h-auto' }) => {
  return (
    <img
      className={`${width} ${height}`}
      src={src}
      srcset={srcset}
      alt={alt}
    ></img>
  )
}

export default Image
