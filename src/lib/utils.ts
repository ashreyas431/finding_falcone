import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const filterVehicleOptions = (
  vehicles: Vehicle[],
  planets: Planet[],
  selectedPlanets: string[]
) => {
  const currentPlanetDistance = planets.filter((planet: Planet) => {
    return planet.name === selectedPlanets[selectedPlanets.length - 1];
  });
//   console.log(currentPlanetDistance);
  let vehicleOptionsFiltered: Vehicle[] = [];
  vehicles.map((vehicle: Vehicle) => {
    if (vehicle.max_distance >= currentPlanetDistance[0].distance) {
      vehicleOptionsFiltered.push(
        Object.assign({}, vehicle, { disabled: false })
      );
    } else
      vehicleOptionsFiltered.push(
        Object.assign({}, vehicle, { disabled: true })
      );
  });
//   console.log(vehicleOptionsFiltered);
  return vehicleOptionsFiltered;
};

export function filterPlanetOptions(options: any[], allSelectedPlanets: any[]) {
    return options.filter((option) => {
      return !allSelectedPlanets.some((planet) => {
        return option.name === planet;
      });
    });
}

export const firstAvailableVehicle = (vehicles: Vehicle[]) => {
    let firstAvailable;
    vehicles.forEach(vehicle => {
       if(vehicle.disabled===false){
        firstAvailable = vehicle;
        return;
       } 
    });
    console.log(firstAvailable);
} 
