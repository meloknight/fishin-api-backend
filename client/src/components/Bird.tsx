type BirdProps = {
  birdBottom: number;
  birdSide: string;
  birdSideAmount: number;
  birdZIndex: number;
};

export default function Bird({
  birdBottom,
  birdSide,
  birdSideAmount,
  birdZIndex,
}: BirdProps) {
  let birdStyle;

  if (birdSide === "left") {
    birdStyle = {
      bottom: `${birdBottom}px`,
      left: `${birdSideAmount}px`,
      zIndex: `${birdZIndex}`,
    };
  } else {
    birdStyle = {
      bottom: `${birdBottom}px`,
      right: `${birdSideAmount}px`,
      zIndex: `${birdZIndex}`,
    };
  }

  return (
    <>
      <div style={birdStyle} className="bird-container">
        <img src="./assets/bird.svg" alt="bird" />
      </div>
    </>
  );
}
