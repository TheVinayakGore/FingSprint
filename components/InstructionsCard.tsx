import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function InstructionsCard() {
  return (
    <Card className="shadow-none hover:shadow-lg w-full">
      <CardHeader>
        <CardTitle>How It Works</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <ul className="list-disc pl-5 space-y-1">
          <li>Type the text exactly as shown above</li>
          <li>Your speed (WPM) and accuracy will update in real-time</li>
          <li>
            Correct letters turn <span className="text-green-600">green</span>,
            incorrect ones turn <span className="text-red-600">red</span>
          </li>
          <li>Test completes automatically when you finish typing</li>
          <li>
            You can restart the test at any time using the &quot;Restart
            Test&quot; button.
          </li>
          <li>
            View your previous results by clicking &quot;Show History&quot;.
          </li>
          <li>Try to improve your WPM and accuracy with each attempt.</li>
          <li>Use a physical keyboard for the best experience.</li>
          <li>
            The &quot;Time Elapsed&quot; shows how long you have been typing.
            The test does not have a fixed time limit, but you can use this to
            challenge yourself (e.g., see how much you can type in 30 seconds).
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
