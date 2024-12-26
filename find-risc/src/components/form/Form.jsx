import React, { useState } from "react";

function QuizForm() {
  const [answers, setAnswers] = useState({});
  const [total, setTotal] = useState(null);

  const questions = [
    {
      id: "q1",
      question: "1) Sua idade:",
      options: [
        { label: "Abaixo de 45 anos", value: 0 },
        { label: "Entre 45-54 anos", value: 2 },
        { label: "Entre 55 e 64 anos", value: 3 },
        { label: "Acima de 64 anos", value: 4 },
      ],
    },
    {
      id: "q2",
      question: "2) Com que frequência você faz exercícios?",
      options: [
        { label: "Nunca", value: 1 },
        { label: "Raramente", value: 2 },
        { label: "Regularmente", value: 3 },
        { label: "Diariamente", value: 4 },
      ],
    },
    {
      id: "q3",
      question: "3) Você fuma?",
      options: [
        { label: "Sim", value: 5 },
        { label: "Não", value: 0 },
      ],
    },
  ];

  // Atualizar a resposta selecionada
  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  // Calcular o total
  const handleSubmit = (e) => {
    e.preventDefault();
    const totalScore = Object.values(answers).reduce(
      (sum, value) => sum + value,
      0
    );
    setTotal(totalScore);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Formulário de Avaliação</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((q) => (
          <div key={q.id} style={{ marginBottom: "20px" }}>
            <p>{q.question}</p>
            {q.options.map((option, index) => (
              <label
                key={index}
                style={{ display: "block", marginBottom: "8px" }}
              >
                <input
                  type="radio"
                  name={q.id}
                  value={option.value}
                  onChange={() => handleAnswerChange(q.id, option.value)}
                  required
                />
                {option.label}
              </label>
            ))}
          </div>
        ))}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Calcular Resultado
        </button>
      </form>
      {total !== null && (
        <div
          style={{
            marginTop: "20px",
            fontWeight: "bold",
            fontSize: "18px",
            color: "green",
          }}
        >
          Sua pontuação total é: {total}
        </div>
      )}
    </div>
  );
}

export default QuizForm;
