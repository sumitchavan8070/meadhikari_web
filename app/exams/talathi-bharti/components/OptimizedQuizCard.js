"use client";

import React, { memo, useCallback } from "react";
import QuizCard from "@/app/previous-year-paper/components/QuizCard";
import { useRouter } from "next/navigation";
import { useAuth } from "@/Context/AuthContext";

const OptimizedQuizCard = memo(({ 
  quiz, 
  index, 
  loadingCard, 
  isSubscriptionActive, 
  onStartTest 
}) => {
  const router = useRouter();
  const { user } = useAuth();

  const handleClick = useCallback(() => {
    onStartTest(
      quiz.paper.catID,
      quiz.paper.subCatId,
      quiz.paper.yearId,
      index,
      quiz
    );
  }, [quiz, index, onStartTest]);

  const isFree = index < 3; // FREE_QUIZ_NUMBER = 3
  const isPremium = !isFree && !isSubscriptionActive;

  const buttonText = loadingCard === index
    ? "Loading..."
    : isFree || isSubscriptionActive
    ? "Start Test"
    : "🔐 Premium";

  const handlePremiumClick = useCallback(() => {
    if (!user) {
      // Will be handled by parent
      return;
    }
    router.push("/pricing");
  }, [user, router]);

  return (
    <div className="relative group">
      <QuizCard
        title={quiz.title}
        time={`${quiz.time} min`}
        questions={`${quiz.questions} Questions`}
        marks={`${quiz.marks} Marks`}
        languages={quiz.languages.join(", ")}
        attempted={quiz.attempted}
        buttonText={buttonText}
        free={quiz.free}
        live={quiz.live}
        onButtonClick={isPremium && !isSubscriptionActive ? handlePremiumClick : handleClick}
        paper={quiz.paper}
      />
    </div>
  );
});

OptimizedQuizCard.displayName = "OptimizedQuizCard";

export default OptimizedQuizCard;

