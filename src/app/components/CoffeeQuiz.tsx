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
  error: string | null;
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
    prompt:
      "How many coffees do you drink per day?",
    options: ["One Coffee a Day", "More than One Coffee a Day"],
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
    answers: new Array(questions.length).fill(null),
    isLoading: false,
    recommendation: null,
    isClient: false,
    error: null,
  });

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      isClient: true,
      answers: new Array(questions.length).fill(null),
    }));
  }, []);

  const handleAnswer = async (answer: string) => {
    const newAnswers = [...state.answers];
    newAnswers[state.currentQuestion] = answer;

    if (state.currentQuestion < questions.length - 1) {
      setState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        answers: newAnswers,
      }));
    } else {
      setState((prev) => ({ ...prev, answers: newAnswers, isLoading: true }));

      try {
        const response = await fetch("/api/coffee-recommendation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            questions: questions.map((q) => q.prompt),
            answers: newAnswers,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to get recommendation");
        }

        setState((prev) => ({
          ...prev,
          isLoading: false,
          recommendation: data.recommendation,
          error: null,
        }));
      } catch (error) {
        console.error("Error getting recommendation:", error);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error:
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
        error: null,
      }));
    }
  };

  const handleReset = () => {
    setState({
      currentQuestion: 0,
      answers: new Array(questions.length).fill(null),
      isLoading: false,
      recommendation: null,
      isClient: true,
      error: null,
    });
  };

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
          <div className={styles.options} key={state.currentQuestion}>
            {currentQ.options.map((option, index) => (
              <div key={index} className={styles.optionWrapper}>
                <input
                  type="radio"
                  id={`option-${index}`}
                  name={`question-${state.currentQuestion}`}
                  value={option}
                  checked={state.answers[state.currentQuestion] === option}
                  onChange={() => handleAnswer(option)}
                  className={styles.optionInput}
                  disabled={state.isLoading}
                />
                <label
                  htmlFor={`option-${index}`}
                  className={styles.optionLabel}
                >
                  {option}
                </label>
              </div>
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
              <span className={styles.backArrow}>&larr;</span>Back
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

      {state.error && <div className={styles.error}>{state.error}</div>}
    </div>
  );
}
