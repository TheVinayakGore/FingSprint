import React from "react";

type TestResult = {
  wpm: number;
  accuracy: number;
  time: number;
  date: string;
};

interface HistoryCardProps {
  history: TestResult[];
  formatDate: (dateString: string) => string;
  formatTime: (seconds: number) => string;
}

const HistoryCard = ({ history, formatDate, formatTime }: HistoryCardProps) => {
  return (
    <>
      <main className="flex flex-col w-full max-h-60 md:max-h-[30rem] overflow-auto">
        <div className="w-full space-y-2">
          {history.length > 0 ? (
            history.map((test, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border border-primary/50 rounded-md bg-primary/5"
              >
                <div>
                  <div className="font-medium">{test.wpm} WPM</div>
                  <div className="text-sm opacity-60">
                    {formatDate(test.date)}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-medium">{test.accuracy}%</div>
                    <div className="text-sm opacity-60">Accuracy</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{formatTime(test.time)}</div>
                    <div className="text-sm opacity-60">Time</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="opacity-60 text-center">
              No test history yet. Complete a test to use your results here.
            </p>
          )}
        </div>
      </main>
    </>
  );
};

export default HistoryCard;
