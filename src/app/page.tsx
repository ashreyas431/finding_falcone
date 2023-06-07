"use client";

import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import apiHandler from "@/lib/apiHandler";
import { apiEndpoint } from "@/lib/config";
import { useDispatch } from "react-redux";
import { setPlanets, setVehicles } from "@/slices/appSlice";

export default function Home() {
  const dispatch = useDispatch();
  const {
    data: planets,
    isLoading: planetsLoading,
    isError: planetsError
  } = useQuery({
    queryKey: ["planetsList"],
    queryFn: () => apiHandler(apiEndpoint.planets, "get")
  });
  const {
    data: vehicles,
    isLoading: vehiclesLoading,
    isError: vehiclesError
  } = useQuery({
    queryKey: ["vehiclesList"],
    queryFn: () => apiHandler(apiEndpoint.vehicles, "get")
  });

  !planetsLoading && !planetsError ? dispatch(setPlanets(planets.data)) : null;

  !vehiclesLoading && !vehiclesError
    ? dispatch(setVehicles(vehicles.data))
    : null;

  return (
    <>
      <Header />
      <div className="flex justify-center items-center p-5 m-4">
        <Link href="/start-hunt">
          <Button
            isLoading={false}
            variant="default"
            size="xl"
            className="bg-slate-300 text-gray-900"
          >
            Start
          </Button>
        </Link>
      </div>
    </>
  );
}
