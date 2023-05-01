import { useState } from "react";
import Question from "./Question";
import Buscador from "../src/app/Components/Buscador";
import Menu from "../src/app/Components//Menu";
import Image from 'next/image';
import Link from 'next/link';
import '../src/app/globals.css'
import { Inter } from 'next/font/google'

const questions = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["Londres", "París", "Madrid", "Berlín"],
    answer: "París"
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Amazonas", "Nilo", "Mississippi", "Yangtze"],
    answer: "Amazonas"
  },
  {
    question: "¿Quién escribió el Quijote?",
    options: ["Miguel de Cervantes", "Gabriel García Márquez", "Jorge Luis Borges", "Pablo Neruda"],
    answer: "Miguel de Cervantes"
  },
  // ...
];

export default function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const handleAnswer = (answer) => {
    setUserAnswer(answer);
  };
  
  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setUserAnswer("");
  };
  
  const current = questions[currentQuestion];
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 bg-slate-200" >
    <Buscador></Buscador>
    <Menu></Menu>
    <div class="absolute inset-x-0 top-1/2 left-1/2 w-30/40 ml-auto transform -translate-x-1/2 -translate-y-1/2 overflow-x-auto shadow-md sm:rounded-lg p-20 px-4 py-2 bg-slate-100 text-gray-900">
      <Question question={current.question} options={current.options} onSelect={handleAnswer}  />
      <button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={handleNextQuestion}>Siguiente</button>
    </div>
    </main>
  )
}
