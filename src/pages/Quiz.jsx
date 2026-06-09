import { useState } from "react";

const quizQuestions = [
  {
    id: 1,
    question: "How would you describe your skin type?",
    options: ["Oily", "Dry", "Combination", "Sensitive"],
  },
  {
    id: 2,
    question: "What is your top skincare concern?",
    options: ["Acne & breakouts", "Dullness", "Fine lines", "Redness"],
  },
  {
    id: 3,
    question: "How much time do you want to spend on your routine?",
    options: ["Quick + simple", "Balanced", "Complete ritual"],
  },
];

const recommendations = {
  Oily: "Lightweight gel formulas and mattifying hydration.",
  Dry: "Rich nourishment with soothing oils and barrier support.",
  Combination: "Balanced solutions that hydrate without shine.",
  Sensitive: "Gentle, calming care to strengthen skin comfort.",
  "Acne & breakouts": "Clarifying cleansers and barrier-safe actives.",
  Dullness: "Brightening blends with hydration for healthy glow.",
  "Fine lines": "Smooth, renewing products for supple texture.",
  Redness: "Soothing botanicals to calm and protect skin.",
};

export function Quiz() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");

  const selectAnswer = (id, option) => {
    setAnswers((prev) => ({ ...prev, [id]: option }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const skinType = answers[1];
    const concern = answers[2];
    if (!skinType || !concern) {
      setResult("Please select at least your skin type and top concern.");
      return;
    }

    const typeAdvice = recommendations[skinType] || "Balanced care for healthy skin.";
    const concernAdvice = recommendations[concern] || "Custom routine guidance for your goals.";

    setResult(
      `Based on your answers, Glowara recommends ${typeAdvice.toLowerCase()} Pair it with ${concernAdvice.toLowerCase()}`
    );
  };

  return (
    <div className="quiz-page">
      <section className="section quiz-hero">
        <div className="highlight-copy">
          <p className="eyebrow">Skin quiz</p>
          <h2>Find your perfect Glowara routine</h2>
          <p>
            Answer a few quick questions and receive a personalized skincare recommendation tailored to your skin type and goals.
          </p>
        </div>
      </section>

      <form className="section quiz-form" onSubmit={handleSubmit}>
        {quizQuestions.map((item) => (
          <div key={item.id} className="quiz-card">
            <h3>{item.question}</h3>
            <div className="quiz-options">
              {item.options.map((option) => (
                <label key={option} className="quiz-option">
                  <input
                    type="radio"
                    name={`question-${item.id}`}
                    value={option}
                    checked={answers[item.id] === option}
                    onChange={() => selectAnswer(item.id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}

        <button type="submit" className="btn quiz-submit">
          Get Recommendation
        </button>

        {result && <p className="quiz-result">{result}</p>}
      </form>
    </div>
  );
}
