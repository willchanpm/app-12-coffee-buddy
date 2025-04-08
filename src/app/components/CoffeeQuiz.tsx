"use client";

import { useState, useEffect } from "react";
import styles from "@/app/components/CoffeeQuiz.module.css";

interface Question {
  prompt: string;
  options: [string, string];
}

interface QuizState {
  currentQuestion: number;
  answers: string[];
  isLoading: boolean;
  recommendation: string | null;
  isClient: boolean;
}

const questions: Question[] = [
  {
    prompt: "Do you usually drink your coffee with milk or black?",
    options: ["With Milk", "Black"],
  },
  {
    prompt: "Do you prefer your coffee hot or iced?",
    options: ["Hot", "Iced"],
  },
  {
    prompt:
      "Do you like fruity and bright flavours, or chocolatey and nutty ones?",
    options: ["Fruity & Bright", "Chocolatey & Nutty"],
  },
  {
    prompt: "Do you brew with espresso machines or filter methods?",
    options: ["Espresso Machine", "Filter Methods"],
  },
  {
    prompt:
      "Do you enjoy trying new and surprising flavours, or prefer familiar and comforting ones?",
    options: ["New & Surprising", "Familiar & Comforting"],
  },
  {
    prompt: "Do you grind your own beans or buy pre-ground coffee?",
    options: ["Grind Own Beans", "Pre-ground"],
  },
  {
    prompt:
      "Are you sensitive to acidity in coffee, or do you enjoy bright, tangy notes?",
    options: ["Sensitive to Acidity", "Enjoy Bright Notes"],
  },
  {
    prompt: "Do you usually drink one coffee a day, or sip throughout the day?",
    options: ["One Coffee a Day", "Multiple Throughout Day"],
  },
  {
    prompt:
      "Do you prefer a smooth and clean mouthfeel, or something heavier and syrupy?",
    options: ["Smooth & Clean", "Heavy & Syrupy"],
  },
];

export default function CoffeeQuiz() {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    isLoading: false,
    recommendation: null,
    isClient: false,
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, isClient: true }));
  }, []);

  const handleAnswer = async (answer: string) => {
    const newAnswers = [...state.answers, answer];

    if (state.currentQuestion < questions.length - 1) {
      setState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        answers: newAnswers,
      }));
    } else {
      // Last question answered, get recommendation
      setState((prev) => ({ ...prev, answers: newAnswers, isLoading: true }));

      try {
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [
                {
                  role: "system",
                  content: `You are a coffee expert helping someone choose the right coffee beans based on their preferences. Based on the following answers, what kind of coffee should they try? Please recommend bean origin, processing method, roast level, and suggested brew method. Answers: ${questions
                    .map((q, i) => `${q.prompt} ${newAnswers[i]}`)
                    .join(", ")}`,
                },
              ],
            }),
          }
        );

        const data = await response.json();
        setState((prev) => ({
          ...prev,
          isLoading: false,
          recommendation: data.choices[0].message.content,
        }));
      } catch (error) {
        console.error("Error getting recommendation:", error);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          recommendation:
            "Sorry, there was an error getting your recommendation. Please try again.",
        }));
      }
    }
  };

  const handleBack = () => {
    if (state.currentQuestion > 0) {
      setState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1,
        answers: prev.answers.slice(0, -1),
      }));
    }
  };

  const handleReset = () => {
    setState({
      currentQuestion: 0,
      answers: [],
      isLoading: false,
      recommendation: null,
      isClient: true,
    });
  };

  // Don't render anything until we're on the client
  if (!state.isClient) {
    return null;
  }

  const currentQ = questions[state.currentQuestion];
  const progress = (state.currentQuestion / questions.length) * 100;

  return (
    <div className={styles.container}>
      {!state.recommendation ? (
        <>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className={styles.progressText}>
              Question {state.currentQuestion + 1} of {questions.length}
            </div>
          </div>
          <h2 className={styles.prompt}>{currentQ.prompt}</h2>
          <div className={styles.options}>
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={styles.option}
                disabled={state.isLoading}
              >
                {option}
              </button>
            ))}
          </div>
          <div className={styles.navigation}>
            <button
              onClick={handleBack}
              className={`${styles.navButton} ${
                state.currentQuestion === 0 ? styles.disabled : ""
              }`}
              disabled={state.currentQuestion === 0 || state.isLoading}
            >
              ← Back
            </button>
            <button
              onClick={handleReset}
              className={styles.navButton}
              disabled={state.isLoading}
            >
              Start Over
            </button>
          </div>
        </>
      ) : (
        <div className={styles.recommendation}>
          <h2>Your Perfect Coffee Match</h2>
          <p>{state.recommendation}</p>
          <button onClick={handleReset} className={styles.resetButton}>
            Take Quiz Again
          </button>
        </div>
      )}

      {state.isLoading && (
        <div className={styles.loading}>
          Brewing your perfect coffee recommendation...
        </div>
      )}
    </div>
  );
}
