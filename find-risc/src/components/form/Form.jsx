import React, { useState } from "react";
import Modal from "../modal/Modal";

function QuizForm() {
  const [answers, setAnswers] = useState({});
  const [total, setTotal] = useState(null);
  const [riskLevel, setRiskLevel] = useState("");
  const [open, setOpen] = useState(false);
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
      question: "2) Índice de massa corporal (IMC)",
      options: [
        { label: "Abaixo de 25Kg/m²", value: 0 },
        { label: "25-30Kg/m²", value: 1 },
        { label: "Acima de 30Kg/m²", value: 3 },
        
      ],
      
    },
    {
      id: "q3",
      question:
        "3) Circunferência da cintura medida abaixo das costelas (geralmente na altura do umbigo",
      options: [
        {
          label: "Homens: Menor  que 94cm & Mulheres  menor que 80 cm",
          value: 0,
        },
        { label: "Homens: Entre 94-102cm & Mulheres  entre 80-88cm", value: 3 },
        {
          label: "Homens: Maior  que 102cm & Mulheres  maior que 88 cm",
          value: 4,
        },
      ],
    },
    {
      id: "q4",
      question: "4) Pratica ao menos 30 minutos de atividade física diária?",
      options: [
        { label: "Sim", value: 0 },
        { label: "Não", value: 2 },
      ],
    },
    {
      id: "q5",
      question:
        "5) Com que frequência você come legumes, verduras, frutas ou grãos?",
      options: [
        { label: "Todos os dias", value: 0 },
        { label: "Não como todos os dias", value: 1 },
      ],
    },
    {
      id: "q6",
      question:
        "6) Você já tomou regularmente algum medicamento para pressão alta?",
      options: [
        { label: "Não", value: 0 },
        { label: "Sim", value: 1 },
      ],
    },
    {
      id: "q7",
      question:
        "7) Alguma vez você já apresentou glicose alta no sangue (por exemplo, em um exame de rotina, durante uma doença, durante gravidez?",
      options: [
        { label: "Não", value: 0 },
        { label: "Sim", value: 5 },
      ],
    },
    {
      id: "q8",
      question:
        "8) Algum membro da sua família ou parente próximo já foi diagnósticado com diabetes (tipo 1 ou tipo2)?",
      options: [
        { label: "Não", value: 0 },
        {
          label:
            "Sim: avós, tia, tio ou primo de primeiro grau (exceto pai, mãe, irmão, irmã ou filhos)",
          value: 3,
        },
        { label: "Sim: pai, mãe, irmão, irmã ou filho", value: 5 },
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

  const getRiskLevel = (score) => {
    if (score < 7) {
      return "Risco Baixo - cerca de 1 em cada 100 pessoas irá desenvolver a doença.";
    } else if (score >= 7 && score <= 11) {
      return "Risco Levemente Elevado - cerca de 1 em cada 25 pessoas irá desenvolver a doença.";
    } else if (score >= 12 && score <= 14) {
      return "Risco Moderado - cerca de 1 em cada 6 pessoas irá desenvolver a doença.";
    } else if (score >= 15 && score <= 20) {
      return "Risco Alto - cerca de 1 em cada 3 pessoas irá desenvolver a doença.";
    } else {
      return "Risco Muito Alto - cerca de 1 em cada 2 pessoas irá desenvolver a doença.";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalScore = Object.values(answers).reduce(
      (sum, value) => sum + value,
      0
    );
    setTotal(totalScore);
    setRiskLevel(getRiskLevel(totalScore));
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
            {q.id === "q2" && (
              <>
              <button onClick={() => setOpen(!open)}>Calcule seu Imc</button>
              <Modal isOpen={open} set={setOpen} />
              </>
            ) }
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
          <p>Sua pontuação total é: {total}</p>
          <p>{riskLevel}</p>
        </div>
      )}
    </div>
  );
}

export default QuizForm;
