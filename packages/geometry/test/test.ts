// Lib
import { ICoordinates, IPath, Poly } from "../lib/geometry";

describe("Geometry", async () => {
    // First get path
    const path = Poly.decode("_wlhHsqzeBtJvOr@dAVTfBx@PLb@d@V^dK`PzKvPpApB|AvBxLpPzJjNr@`A");

    // Init point
    const point: ICoordinates = {
        lat: 48.71930384073145,
        lng: 16.83788543896355
    };

    console.log(path);

    // Now check if they are near
    console.log(Poly.isLocationOnPath(point, path, 50));
});