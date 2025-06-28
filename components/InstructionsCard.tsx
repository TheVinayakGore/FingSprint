import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const InstructionsCard = () => {
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>How it Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc pl-5 space-y-1">
            <li>Type the text exactly as shown above</li>
            <li>Your speed (WPM) and accuracy will update in real-time</li>
            <li>
              Correct letters turn <b className="text-green-600">green</b>,
              incorrect ones turn <b className="text-red-600">red</b>
            </li>
            <li>Test completes automatically when you finish typing</li>
            <li>
              You can restart the test at any time using the{" "}
              <b>&quot;Restart Test&quot;</b> button.
            </li>
            <li>
              View your previous results by clicking{" "}
              <b>&quot;Show History&quot;</b>.
            </li>
            <li>Try to improve your WPM and accuracy with each attempt.</li>
            <li>Use a physical keyboard for the best experience.</li>
            <li>
              The <b>&quot;Time Elapsed&quot;</b> shows how long you have been
              typing. The test does not have a fixed time limit, but you can use
              this to challenge yourself (e.g., see how much you can type in 30
              seconds).
            </li>
          </ul>
        </CardContent>
      </Card>
    </>
  );
};

export default InstructionsCard;
