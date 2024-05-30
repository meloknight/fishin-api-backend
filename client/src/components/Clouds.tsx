import Cloud from "./Cloud";

export default function Clouds() {
  return (
    <>
      <Cloud
        cloudBottom={85}
        cloudSide="left"
        cloudSideAmount={-20}
        cloudZIndex={1}
      />
      <Cloud
        cloudBottom={55}
        cloudSide="left"
        cloudSideAmount={-60}
        cloudZIndex={6}
      />
      <Cloud
        cloudBottom={59}
        cloudSide="right"
        cloudSideAmount={120}
        cloudZIndex={4}
      />
      <Cloud
        cloudBottom={40}
        cloudSide="right"
        cloudSideAmount={450}
        cloudZIndex={11}
      />
    </>
  );
}
