"use client";

import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import Header from "@/components/ui/Header";
import Navigation from "@/components/ui/Navigation";
import RadioGroup from "@/components/ui/Radio";
import apiHandler from "@/lib/apiHandler";
import { apiEndpoint } from "@/lib/config";
import { setToken } from "@/slices/appSlice";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function StartHuntPage() {
  const dispatch = useDispatch();
  const [selectedPlanets, setSelectedPlanets] = useState<any[]>([]);
  const planetsTemp: Planets[] = useSelector((state) => {
    return (state as any).planets;
  });

  const {
    data: token,
    isLoading: tokenLoading,
    isError: tokenError
  } = useQuery({
    queryKey: ["token"],
    queryFn: () => apiHandler(apiEndpoint.token, "post")
  });

  !tokenLoading && !tokenError ? dispatch(setToken(token.data.token)) : null;

  return (
    <>
      <Header />
      <Navigation />

      <div className="flex justify-between justify-center items-center w-4/5 mx-[10%]">
        {selectedPlanets.length === 0 ? (
          <Dropdown
            options={planetsTemp}
            addSelectedOption={setSelectedPlanets}
            allSelectedPlanets={selectedPlanets}
          />
        ) : (
          <>
            <label>{`Selected Planet: ${selectedPlanets[0].name}`}</label>
            <div className="block">
              <RadioGroup options={[]} />
            </div>
          </>
        )}
        {selectedPlanets.length === 1 ? (
          <Dropdown
            options={planetsTemp}
            addSelectedOption={setSelectedPlanets}
            allSelectedPlanets={selectedPlanets}
          />
        ) : (
          <>
            {selectedPlanets.length >= 2 ? (
              <label>{`Selected Planet: ${selectedPlanets[1].name}`}</label>
            ) : null}
          </>
        )}
        {selectedPlanets.length === 2 ? (
          <Dropdown
            options={planetsTemp}
            addSelectedOption={setSelectedPlanets}
            allSelectedPlanets={selectedPlanets}
          />
        ) : (
          <>
            {selectedPlanets.length >= 3 ? (
              <>
                <label>{`Selected Planet: ${selectedPlanets[2].name}`}</label>
              </>
            ) : null}
          </>
        )}
        {selectedPlanets.length === 3 ? (
          <Dropdown
            options={planetsTemp}
            addSelectedOption={setSelectedPlanets}
            allSelectedPlanets={selectedPlanets}
          />
        ) : (
          <>
            {selectedPlanets.length >= 4 ? (
              <label>{`Selected Planet: ${selectedPlanets[3].name}`}</label>
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
            className="hover:bg-slate-300 hover:text-black"
          >
            Submit
          </Button>
        </Link>
      </div>
    </>
  );
}
