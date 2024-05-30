export async function getGoFishin(
  setGoFishinCardInfo: React.Dispatch<React.SetStateAction<any>>,
  setFishCardDown: any
) {
  // "https://fishin-api.azurewebsites.net/api/v1/fish/gofishin"
  try {
    const response = await fetch(
      "https://fishin-api.azurewebsites.net/api/v1/fish/gofishin"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);

    setGoFishinCardInfo((prevInfo: any) => ({
      ...prevInfo,
      fish_name: data.fish_name,
      fish_length_cms: data.fish_length_cms,
      fish_weight_kgs: data.fish_weight_kgs,
      fish_location: data.fish_location,
      fish_origin: data.fish_origin,
    }));

    setFishCardDown("up");
  } catch (err) {
    console.error(err);
  }
}
