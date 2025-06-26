import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function IdealWPMCard() {
  return (
    <Card className="shadow-none hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span role="img" aria-label="speed">
            🚀
          </span>{" "}
          Ideal WPM
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-base">
          <strong>Average Typist:</strong> 40 WPM
          <br />
          <strong>Professional Typist:</strong> 65-75 WPM
          <br />
          <strong>World Class:</strong> 100+ WPM
        </p>
        <p className="text-sm opacity-60">
          WPM (Words Per Minute) is a standard metric for typing speed. Most
          people can improve their speed and accuracy with regular practice!
        </p>
      </CardContent>
    </Card>
  );
}
