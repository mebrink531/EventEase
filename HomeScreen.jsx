
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import "@fontsource/poppins";

export default function HomeScreen() {
  const [showBirthdayPopup, setShowBirthdayPopup] = useState(false);
  const [showWeddingPopup, setShowWeddingPopup] = useState(false);

  return (
    <div className="p-6 space-y-7 font-[Poppins] bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center text-green-600">EVENT EASE</h1>

      <Card className="relative p-5">
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-green-700">Birthday Party</p>
              <p className="text-sm text-gray-500">July 10, 2025</p>
            </div>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white"
              onMouseEnter={() => setShowBirthdayPopup(true)}
              onMouseLeave={() => setShowBirthdayPopup(false)}
            >
              View Event
            </Button>
          </div>
        </CardContent>
        {showBirthdayPopup && (
          <div className="absolute top-16 right-4 bg-white shadow-md rounded-md p-4 border w-64 z-50">
            <h4 className="font-medium text-sm mb-2 text-green-600">Budget Tracker</h4>
            <p className="text-xs text-gray-600">Spent: $250 / Budget: $500</p>
            <Progress value={50} className="mt-1 h-2 bg-green-200" />
          </div>
        )}
      </Card>

      <Card className="relative p-5">
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-green-700">Wedding</p>
              <p className="text-sm text-gray-500">August 10, 2025</p>
            </div>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white"
              onMouseEnter={() => setShowWeddingPopup(true)}
              onMouseLeave={() => setShowWeddingPopup(false)}
            >
              View Event
            </Button>
          </div>
        </CardContent>
        {showWeddingPopup && (
          <div className="absolute top-16 right-4 bg-white shadow-md rounded-md p-4 border w-64 z-50">
            <h4 className="font-medium text-sm mb-2 text-green-600">Budget Tracker</h4>
            <p className="text-xs text-gray-600">Spent: $7,000 / Budget: $10,000</p>
            <Progress value={70} className="mt-1 h-2 bg-green-200" />
          </div>
        )}
      </Card>

      <div className="flex justify-center">
        <Button className="rounded-full text-xl px-6 py-3 bg-green-500 hover:bg-green-600 text-white">
          +
        </Button>
      </div>
    </div>
  );
}
