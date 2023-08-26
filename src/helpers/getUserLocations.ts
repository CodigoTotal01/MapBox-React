
export const getUserLocations = async (): Promise<[number, number]> => {
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(({coords}) => {
            resolve([coords.longitude, coords.latitude]);
        }, (err) => {
            alert("No se pudo objtener la geolocalizacion");
            console.log("Error: ", err);
        });
    });
}