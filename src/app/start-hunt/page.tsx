"use client";

import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import Header from "@/components/ui/Header";
import Navigation from "@/components/ui/Navigation";
import RadioGroup from "@/components/ui/Radio";
import apiHandler from "@/lib/apiHandler";
import { apiEndpoint } from "@/lib/config";
import {
  filterPlanetOptions,
  filterVehicleOptions,
  firstAvailableVehicle
} from "@/lib/utils";
import { setToken } from "@/slices/appSlice";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function StartHuntPage() {
  const dispatch = useDispatch();
  const [selectedPlanets, setSelectedPlanets] = useState<string[]>([]);
  const planetsTemp: Planet[] = useSelector((state) => {
    return (state as any).planets;
  });
  const vehiclesTemp: Vehicle[] = useSelector((state) => {
    return (state as any).vehicles;
  });
  const [vehicleSelected, setVehicleSelected] = useState<Vehicle>();
  const [vehicleOptions, setVehicleOptions] = useState<Vehicle[]>([]);

  const {
    data: token,
    isLoading: tokenLoading,
    isError: tokenError
  } = useQuery({
    queryKey: ["token"],
    queryFn: () => apiHandler(apiEndpoint.token, "post")
  });

  useEffect(() => {
    setVehicleOptions(
      filterVehicleOptions(vehiclesTemp, planetsTemp, selectedPlanets)
    );
  }, [selectedPlanets]);

  useEffect(() => {
    setVehicleSelected(firstAvailableVehicle(vehicleOptions));
  }, [vehicleOptions]);

  !tokenLoading && !tokenError ? dispatch(setToken(token.data.token)) : null;

  return (
    <>
      <Header />
      <Navigation />

      <div className="flex justify-between justify-center items-center w-4/5 mx-[10%]">
        {selectedPlanets.length === 0 ? (
          <Dropdown
            options={filterPlanetOptions(planetsTemp, selectedPlanets)}
            addSelectedOption={setSelectedPlanets}
            allSelectedPlanets={selectedPlanets}
          />
        ) : (
          <div>
            <label>{`Selected Planet: ${selectedPlanets[0]}`}</label>
            <RadioGroup
              options={filterVehicleOptions(
                vehiclesTemp,
                planetsTemp,
                selectedPlanets
              )}
              checked={vehicleSelected}
              setChecked={setVehicleSelected}
            />
          </div>
        )}
        {selectedPlanets.length === 1 ? (
          <Dropdown
            options={filterPlanetOptions(planetsTemp, selectedPlanets)}
            addSelectedOption={setSelectedPlanets}
            allSelectedPlanets={selectedPlanets}
          />
        ) : (
          <>
            {selectedPlanets.length >= 2 ? (
              <div>
                <label>{`Selected Planet: ${selectedPlanets[1]}`}</label>
                <RadioGroup
                  options={filterVehicleOptions(
                    vehiclesTemp,
                    planetsTemp,
                    selectedPlanets,
                    vehicleSelected,
                    setVehicleSelected
                  )}
                  checked={vehicleSelected}
                  setChecked={setVehicleSelected}
                />
              </div>
            ) : null}
          </>
        )}
        {selectedPlanets.length === 2 ? (
          <Dropdown
            options={filterPlanetOptions(planetsTemp, selectedPlanets)}
            addSelectedOption={setSelectedPlanets}
            allSelectedPlanets={selectedPlanets}
          />
        ) : (
          <>
            {selectedPlanets.length >= 3 ? (
              <div>
                <label>{`Selected Planet: ${selectedPlanets[2]}`}</label>
                <RadioGroup
                  options={filterVehicleOptions(
                    vehiclesTemp,
                    planetsTemp,
                    selectedPlanets,
                    vehicleSelected,
                    setVehicleSelected
                  )}
                  checked={vehicleSelected}
                  setChecked={setVehicleSelected}
                />
              </div>
            ) : null}
          </>
        )}
        {selectedPlanets.length === 3 ? (
          <Dropdown
            options={filterPlanetOptions(planetsTemp, selectedPlanets)}
            addSelectedOption={setSelectedPlanets}
            allSelectedPlanets={selectedPlanets}
          />
        ) : (
          <>
            {selectedPlanets.length >= 4 ? (
              <div>
                <label>{`Selected Planet: ${selectedPlanets[3]}`}</label>
                <RadioGroup
                  options={filterVehicleOptions(
                    vehiclesTemp,
                    planetsTemp,
                    selectedPlanets,
                    vehicleSelected,
                    setVehicleSelected
                  )}
                  checked={vehicleSelected}
                  setChecked={setVehicleSelected}
                />
              </div>
            ) : null}
          </>
        )}
      </div>

      <div className="flex justify-center items-center">
        <Link href="/result">
          <Button
            variant="default"
            size="lg"
            isLoading={false}
            className="hover:bg-slate-300 hover:text-black mt-10"
          >
            Submit
          </Button>
        </Link>
      </div>
    </>
  );
}
