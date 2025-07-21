import type { ICalcCard } from "../types/ICalcCard";

export const Cards: ICalcCard[] = [
  {
    title: "Самый полный калькулятор",
    description: "Комплексный расчет: калории, БЖУ, ИМТ, идеальный вес и рекомендации",
    path: "/calc/FULL",
    color: "#FF5722",
    src: "https://api.dicebear.com/7.x/identicon/svg?seed=nutrition&backgroundColor=ff5722&backgroundType=gradientLinear"
  },
  {
    title: "ИМТ (Индекс массы тела)",
    description: "Рассчитайте ваш индекс массы тела на основе роста и веса",
    path: "/calc/bmi",
    color: "#4CAF50",
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=scale&backgroundColor=4caf50"
  },
  {
    title: "Соотношение БЖУ",
    description: "Оптимальное распределение белков, жиров и углеводов",
    path: "/calc/macros",
    color: "#FF9800",
    src: "https://api.dicebear.com/7.x/lorelei/svg?seed=workout&backgroundColor=607d8b"
  },
  {
    title: "1ПМ (Одноповторный максимум)",
    description: "Рассчитайте ваш максимальный вес для одного повторения",
    path: "/calc/1rm",
    color: "#F44336",
    src: "https://api.dicebear.com/7.x/adventurer/svg?seed=dumbbell&backgroundColor=f44336"
  },
  {
    title: "Суточная норма белка",
    description: "Рассчитайте вашу суточную норму белка",
    path: "/calc/belok",
    color: "#9C27B0",
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=scale&backgroundColor=4caf50"
  },
  {
    title: "Калькулятор BAC",
    description: "Оцените содержание алкоголя в крови",
    path: "/calc/bac",
    color: "#795548",
    src: "https://api.dicebear.com/7.x/personas/svg?seed=cocktail&backgroundColor=795548"
  },
  {
    title: "Объем тренировки (тоннаж)",
    description: "Рассчитайте ваш общий тоннаж",
    path: "/calc/tonaG",
    color: "#607D8B",
    src: "https://api.dicebear.com/7.x/lorelei/svg?seed=workout&backgroundColor=607d8b"
  }
];