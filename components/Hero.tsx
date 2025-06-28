"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import StatsCard from "./StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FaKeyboard } from "react-icons/fa";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import InstructionsCard from "./InstructionsCard";
import IdealWPMCard from "./IdealWPMCard";
import { FiCheckCircle } from "react-icons/fi";
import { format } from "date-fns";

type TestResult = {
  wpm: number;
  accuracy: number;
  time: number;
  date: string;
};

const sampleTexts = [
  "The quick brown fox jumps over the lazy dog.",
  "Programming is the art of telling another human what one wants the computer to do.",
  "To be or not to be, that is the question.",
  "The only way to learn a new programming language is by writing programs in it.",
  "Life is what happens when you're busy making other plans.",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [history, setHistory] = useState<TestResult[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load History from localstorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("typingTestHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Initialize with random text
  useEffect(() => {
    resetTest();
  }, []);

  const resetTest = () => {
    const randomText =
      sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setText(randomText);
    setUserInput("");
    setTime(0);
    setIsRunning(false);
    setIsComplete(false);
    setWpm(0);
    setAccuracy(100);
    if (inputRef.current) inputRef.current.focus();
  };

  // Save test results to history (now memoized with useCallback)
  const saveResult = useCallback(
    (result: TestResult) => {
      const newHistory = [result, ...history].slice(0, 10); // keep last 10 results
      setHistory(newHistory);
      localStorage.setItem("typingTestHistory", JSON.stringify(newHistory));
    },
    [history]
  ); // Only recreate when history changes

  // Timer Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && !isComplete) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, isComplete]);

  // Calculate WPM and accuracy
  useEffect(() => {
    if (userInput.length > 0 && !isComplete) {
      setIsRunning(true);

      // calculate accuracy
      const correctChars = [...userInput].filter(
        (char, i) => char === text[i]
      ).length;
      const newAccuracy = Math.round((correctChars / userInput.length) * 100);
      setAccuracy(newAccuracy);

      // calculate WPM (5 chars = 1 word)
      const words = userInput.length / 5;
      const minutes = time / 60;
      const newWpm = minutes > 0 ? Math.round(words / minutes) : 0;
      setWpm(newWpm);

      // Check if Completed
      if (userInput.length == text.length) {
        const result = {
          wpm: newWpm,
          accuracy: newAccuracy,
          time: time,
          date: new Date().toISOString(),
        };
        saveResult(result);
        setIsComplete(true);
        setIsRunning(false);
      } else if (userInput.length === 0) {
        setAccuracy(100);
        setWpm(0);
      }
    }
  }, [userInput, isComplete, text, time, saveResult]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isComplete) {
      setUserInput(e.target.value);
    }
  };

  const formatTime = (seconds: number) => {
    return format(new Date(seconds * 1000), "mm:ss");
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMM d, yyyy - h:mm a");
  };

  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6 p-6 md:p-10 w-full">
        <div className="col-span-2 lg:col-span-1">
          <StatsCard
            time={formatTime(time)}
            wpm={wpm}
            accuracy={accuracy}
            onRestart={resetTest}
            onToggleHistory={() => setShowHistory(!showHistory)}
            showHistory={showHistory}
            history={history}
            formatDate={formatDate}
            formatTime={formatTime}
          />

        </div>
        <div className="col-span-2 lg:col-span-2 space-y-6">
          {/* Ideal WPM Card */}
          <IdealWPMCard />
          {/* Typing Test Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaKeyboard className="text-primary" /> Typing Test
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 text-sm md:text-base lg:text-lg p-2 md:p-4 border border-primary/20 bg-primary/5 rounded-md">
                <p className="leading-relaxed">
                  {text.split("").map((char, index) => {
                    let color = "";
                    if (index < userInput.length) {
                      color =
                        userInput[index] == char
                          ? "text-green-600"
                          : "text-red-600";
                    }
                    return (
                      <span key={index} className={color}>
                        {char}
                      </span>
                    );
                  })}
                </p>
              </div>
              <div className="space-y-2">
                <Label>Type the text above : </Label>
                <Input
                  id="typing-input"
                  ref={inputRef}
                  value={userInput}
                  onChange={handleInputChange}
                  disabled={isComplete}
                  placeholder={
                    isComplete
                      ? "Test completed ! Click Restart Test to try again"
                      : "Start typing..."
                  }
                  className="text-sm md:text-lg py-4 md:py-6"
                  autoFocus
                />
              </div>
            </CardContent>
          </Card>
          {/* Results Banner */}
          {isComplete && (
            <div className="p-4 bg-green-100 border border-green-200 rounded-md flex items-center gap-3">
              <FiCheckCircle className="text-green-600" size={24} />
              <div>
                <h3 className="font-semibold text-green-800">
                  Test Completed !
                </h3>
                <p className="text-green-700">
                  Your typing : <strong>{wpm} WPM</strong> with{" "}
                  <strong>{accuracy}%</strong> accuracy in {formatTime(time)}
                </p>
              </div>
            </div>
          )}
          {/* Instructions Card */}
          <InstructionsCard />
        </div>
      </main>
    </>
  );
};

export default Hero;
