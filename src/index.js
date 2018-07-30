import React from "react";

export default ({
  background,
  children,
  style,
  separators = false,
  separatorWidth = "2px",
  separatorType = "solid",
  separatorColor = "white",
  elementPadding = 15,
  align = "center"
}) => {
  const padding = elementPadding;
  const leftRightIncrease = padding * 1.3;
  let justify;
  if (align === "center") {
    justify = "center";
  } else if (align === "left") {
    justify = "flex-start";
  } else {
    justify = "flex-end";
  }

  return (
    <nav
      style={{
        backgroundColor: background,
        width: "100%",
        display: "flex",
        overflowX: "auto",
        justifyContent: justify,
        WebkitOverflowScrolling: "touch",
        overFlowScrolling: "touch",
        boxSizing: "border-box",
        ...style
      }}
    >
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          boxSizing: "border-box"
        }}
      >
        {children.map((child, i) => {
          let borderString = `${separatorType} ${separatorWidth} ${separatorColor}`;

          return (
            <span
              style={{
                boxSizing: "border-box",
                borderLeft: i !== 0 && separators && borderString,
                padding:
                  i === 0
                    ? `${padding}px ${leftRightIncrease}px ${padding}px ${padding}px`
                    : `${padding}px ${leftRightIncrease}px`
              }}
              key={i}
            >
              {child}
            </span>
          );
        })}
      </div>
    </nav>
  );
};
