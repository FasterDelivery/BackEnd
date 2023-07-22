const Nominatim = require("nominatim-geocoder");

const getCoordinates = async (
  street: string,
  city: string,
  state: string,
  postalcode: string
) => {
  const geocoder = new Nominatim();
  const response = await geocoder.search({
    street,
    city,
    country: "Argentina",
    state,
    postalcode
  });
  return response.length ? [response[0].lat, response[0].lon] : response;
};

export default getCoordinates;
