export interface Project {
  id: number
  category: "Modern" | "Classic" | "Minimal"
  image: string
  title: string
  location: string
  spaceType: string
  type: string
  size: string,
  style: string
  description: string
  challenges: string
  solutions: string
  gallery: string[]
  area?: string
  propertyType?: string
}

export const projects: Project[] = [
  {
    id: 8,
    category: "Minimal",
    image:
      "/cappuccino/cappuccino-7.jpg?height=800&width=1200",
    title: "Проект Cappuccino",
    location: "Пловдив, България",
    spaceType: "Всекидневна 40 кв.м",
    type: "Всекидневна",
    size: "40 кв.м",
    style: "Mинимализъм",
    description: "Спокойна всекидневна, вдъхновена от японската естетика.",
    challenges: "Създаване на топло и привлекателно пространство, използвайки минимален брой елементи.",
    solutions:
      "Фокусирахме се върху качеството на материалите и текстурите. Естествените несъвършенства на дървото и камъка добавят характер, докато неутралната палитра създава спокойствие.",
    gallery: [
      "/cappuccino/cappuccino-1.jpg?height=800&width=1200",
      "/cappuccino/cappuccino-2.jpg?height=800&width=1200",
      "/cappuccino/cappuccino-3.jpg?height=800&width=1200",
      "/cappuccino/cappuccino-4.jpg?height=800&width=1200",
      "/cappuccino/cappuccino-5.jpg?height=800&width=1200",
      "/cappuccino/cappuccino-6.jpg?height=800&width=1200",
      "/cappuccino/cappuccino-7.jpg?height=800&width=1200",
    ],
  },
  {
    id: 9,
    category: "Modern",
    image:
      "/5ta/5-ta-13.jpg",
    title: "Проект Модерен",
    location: "София, България",
    spaceType: "Apartament 88 кв.м",
    type: "Apartament",
    size: "88 кв.м",
    style: "Модерен",
    description: "",
    challenges: "",
    solutions:
      "",
    gallery: [
      "/5ta/5-ta-1.jpg",
      "/5ta/5-ta-2.jpg",
      "/5ta/5-ta-3.jpg",
      "/5ta/5-ta-4.jpg",
      "/5ta/5-ta-5.jpg",
      "/5ta/5-ta-6.jpg",
      "/5ta/5-ta-7.jpg",
      "/5ta/5-ta-8.jpg",
      "/5ta/5-ta-9.jpg",
      "/5ta/5-ta-10.jpg",
      "/5ta/5-ta-11.jpg",
      "/5ta/5-ta-12.jpg",
      "/5ta/5-ta-13.jpg",
      "/5ta/5-ta-14.jpg",
      "/5ta/5-ta-15.jpg",
      "/5ta/5-ta-16.jpg",
    ],
  },
  {
    id: 16,
    category: "Modern",
    image:
      "/project_bogoridi/bogoridi-3.jpg",
    title: "Проект Богориди",
    location: "Бургас, България",
    spaceType: "Апартамент 60 кв.м",
    type: "Апартамент",
    size: "60 кв.м",
    style: "Модерен",
    description: "",
    challenges: "",
    solutions:
      "",
    gallery: [
      "/project_bogoridi/bogoridi-1.jpg",
      "/project_bogoridi/bogoridi-2.jpg",
      "/project_bogoridi/bogoridi-3.jpg",
      "/project_bogoridi/bogoridi-4.jpg",
      "/project_bogoridi/bogoridi-5.jpg",
      "/project_bogoridi/bogoridi-6.jpg",
      "/project_bogoridi/bogoridi-7.jpg",
      "/project_bogoridi/bogoridi-8.jpg",
    ],
  },
  {
    id: 10,
    category: "Modern",
    image:
      "/project_essenza/essenza-4.jpg",
    title: "Проект Eсенза",
    location: "Бургас, България",
    spaceType: "Апартамент 121 кв.м",
    type: "Апартамент",
    size: "121 кв.м",
    style: "Модерен",
    description: "",
    challenges: "",
    solutions:
      "",
    gallery: [
      "/project_essenza/essenza-1.jpg",
      "/project_essenza/essenza-2.jpg",
      "/project_essenza/essenza-3.jpg",
      "/project_essenza/essenza-4.jpg",
      "/project_essenza/essenza-5.jpg",
      "/project_essenza/essenza-antre-1.jpg",
      "/project_essenza/essenza-antre-2.jpg",
      "/project_essenza/essenza-banq-1.jpg",
    ],
  },
  {
    id: 11,
    category: "Modern",
    image:
      "/project_modern_comfort/project_modern_comfort-4.jpg",
    title: "Проект Модерен Комфорт",
    location: "Бургас, България",
    spaceType: "Къща 100 кв.м",
    type: "Къща",
    size: "100 кв.м",
    style: "Модерен",
    description: "",
    challenges: "",
    solutions:
      "",
    gallery: [
      "/project_modern_comfort/project_modern_comfort-1.png",
      "/project_modern_comfort/project_modern_comfort-2.jpg",
      "/project_modern_comfort/project_modern_comfort-3.jpg",
      "/project_modern_comfort/project_modern_comfort-4.jpg",
      "/project_modern_comfort/project_modern_comfort-5.png",
      "/project_modern_comfort/project_modern_comfort-6.png",
      "/project_modern_comfort/project_modern_comfort-7.png",
      "/project_modern_comfort/project_modern_comfort-8.png",
      "/project_modern_comfort/project_modern_comfort-9.png",
    ],
  },
  {
    id: 12,
    category: "Modern",
    image:
      "/project_modern_comfort_kid/project_modern_comfort-kid-3.png",
    title: "Проект Комфорт Детска Стая",
    location: "Бургас, България",
    spaceType: "Къща 100 кв.м",
    type: "Къща",
    size: "100 кв.м",
    style: "Модерен",
    description: "",
    challenges: "",
    solutions:
      "",
    gallery: [
      "/project_modern_comfort_kid/project_modern_comfort-kid-1.png",
      "/project_modern_comfort_kid/project_modern_comfort-kid-2.png",
      "/project_modern_comfort_kid/project_modern_comfort-kid-3.png",
      "/project_modern_comfort_kid/project_modern_comfort-kid-4.png",
      "/project_modern_comfort_kid/project_modern_comfort-kid-5.png",
    ],
  },
  {
    id: 13,
    category: "Modern",
    image:
      "/banevo/banevo-1.jpg",
    title: "Проект Къща Банево",
    location: "Бургас, България",
    spaceType: "Къща 168 кв.м",
    type: "Къща",
    size: "168 кв.м",
    style: "Модерен",
    description: "",
    challenges: "",
    solutions:
      "",
    gallery: [
      "/banevo/banevo-1.jpg",
      "/banevo/banevo-2.jpg",
      "/banevo/banevo-3.jpg",
      "/banevo/banevo-4.jpg",
      "/banevo/banevo-5.jpg",
      "/banevo/banevo-6.jpg",
      "/banevo/banevo-7.jpg",
      "/banevo/banevo-8.jpg",
      "/banevo/banevo-9.jpg",
      "/banevo/banevo-10.jpg",
      "/banevo/banevo-11.jpg",
      "/banevo/banevo-12.jpg",
      "/banevo/banevo-13.jpg",
    ],
  },
  {
    id: 14,
    category: "Modern",
    image:
      "/mezonet/mezonet-1.jpg",
    title: "Проект Мезонет Бургас",
    location: "Бургас, България",
    spaceType: "Мезонет 92 кв.м",
    type: "Мезонет",
    size: "92 кв.м",
    style: "Модерен",
    description: "",
    challenges: "",
    solutions:
      "",
    gallery: [
      "/mezonet/mezonet-1.jpg",
      "/mezonet/mezonet-2.jpg",
      "/mezonet/mezonet-3.jpg",
    ],
  },
  {
    id: 15,
    category: "Modern",
    image:
      "/primorsko/primorsko-3.jpg",
    title: "Проект Къща за гости",
    location: "Приморско, България",
    spaceType: "Къща 132 кв.м",
    type: "Къща",
    size: "132 кв.м",
    style: "Модерен",
    description: "",
    challenges: "",
    solutions:
      "",
    gallery: [
      "/primorsko/primorsko-1.jpg",
      "/primorsko/primorsko-2.jpg",
      "/primorsko/primorsko-3.jpg",
      "/primorsko/primorsko-4.jpg",
      "/primorsko/primorsko-5.jpg",
      "/primorsko/primorsko-6.jpg",
    ],
  },
  {
    id: 17,
    category: "Modern",
    image:
      "/case-study-50s-60s/50s-and-60s-1.jpg",
    title: "Проект 50s & 60s",
    location: "София, България",
    spaceType: "Апартамент 102 кв.м",
    type: "Апартамент",
    size: "102 кв.м",
    style: "Модерен",
    description: "",
    challenges: "",
    solutions:
      "",
    gallery: [
      "/case-study-50s-60s/50s-and-60s-1.jpg",
      "/case-study-50s-60s/50s-and-60s-2.jpg",
      "/case-study-50s-60s/50s-and-60s-3.jpg",
      "/case-study-50s-60s/50s-and-60s-4.jpg",
      "/case-study-50s-60s/50s-and-60s-5.jpg",
      "/case-study-50s-60s/50s-and-60s-6.jpg",
      "/case-study-50s-60s/50s-and-60s-7.jpg",
      "/case-study-50s-60s/50s-and-60s-8.jpg",
      "/case-study-50s-60s/50s-and-60s-9.jpg",
      "/case-study-50s-60s/50s-and-60s-10.jpg",
      "/case-study-50s-60s/50s-and-60s-11.jpg",
      "/case-study-50s-60s/50s-and-60s-12.jpg",
      "/case-study-50s-60s/50s-and-60s-13.jpg",
      "/case-study-50s-60s/50s-and-60s-14.jpg",
      "/case-study-50s-60s/50s-and-60s-15.jpg",
    ],
  },
]
