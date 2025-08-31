export interface Course {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    price: number;
  }
  
  export const mockCourses: Course[] = [
    {
      id: 1,
      title: "React Basics",
      description: "Learn React step by step",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      price: 100,
    },
    {
      id: 2,
      title: "TypeScript Basic",
      description: "Master TS with real examples",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      price: 120,
    },
    {
      id: 3,
      title: "React Advanced",
      description: "Learn React step by step",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      price: 100,
    },
    {
      id: 4,
      title: "TypeScript Advanced",
      description: "Master TS with real examples",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      price: 120,
    },
  ];
  
  export const fetchCourses = () =>
    new Promise<Course[]>((resolve) => {
      setTimeout(() => resolve(mockCourses), 800);
    });
  
  export const handlePurchase = () =>
    new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.2
          ? resolve("Purchase successful")
          : reject("Payment failed");
      }, 800);
    });
  