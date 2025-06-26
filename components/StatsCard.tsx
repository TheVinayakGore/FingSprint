import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { FiClock } from "react-icons/fi";
import HistoryCard from "./HistoryCard";

type TestResult = {
  wpm: number;
  accuracy: number;
  time: number;
  date: string;
};

interface StatsCardProps {
  time: string;
  wpm: number;
  accuracy: number;
  onRestart: () => void;
  onToggleHistory: () => void;
  showHistory: boolean;
  history: TestResult[];
  formatDate: (dateString: string) => string;
  formatTime: (seconds: number) => string;
}

export default function StatsCard({
  time,
  wpm,
  accuracy,
  onRestart,
  history,
  formatDate,
  formatTime,
}: StatsCardProps) {
  return (
    <Card className="md:col-span-1 shadow-none hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FiClock className="text-primary" /> Your Stats
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Time Elapsed</Label>
          <div className="text-2xl font-mono">{time}</div>
        </div>
        <div>
          <Label>Words Per Minute</Label>
          <div className="text-2xl font-mono">{wpm}</div>
        </div>
        <div>
          <Label>Accuracy</Label>
          <div className="flex items-center gap-2">
            <Progress value={accuracy} className="h-2" />
            <span className="text-2xl font-mono">{accuracy}%</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 h-full">
        <Button onClick={onRestart} className="w-full" variant="outline">
          Restart Test
        </Button>
        <h1 className="text-start font-medium text-lg md:text-xl pb-2 mb-2 border-b w-full">
          History of Test
        </h1>
        <HistoryCard
          history={history}
          formatDate={formatDate}
          formatTime={formatTime}
        />
      </CardFooter>
    </Card>
  );
}
