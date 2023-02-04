import React from "react";

const StandardImage = React.forwardRef(function StandardImage(
  { width, src, alt, height, className, style, onLoad },
  ref
) {
  return (
    <img
      width={width}
      src={src}
      alt={alt}
      height={height}
      className={className}
      style={style}
      onLoad={onLoad}
    />
  );
});

export default StandardImage;
