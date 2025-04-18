# db/seeds.rb

teacher = Teacher.create!(
  name: "Andre Baltieri",
  role: "Software Developer",
  avatar: "https://github.com/andrebaltieri.png"
)

Lesson.create!([
  {
    videoId: "P5eqNeGSXRs",
    formation: "Formação de SOLID",
    title: "Aula 01 - Single Responsability Principle",
    description: "S - Cada classe deve ter uma única responsabilidade.",
    date: "Segunda - 30 de Abril - 10h00",
    isAvailable: true,
    isLive: false,
    teacher: teacher
  },
  {
    videoId: "t4pi3wYMDjQ",
    formation: "Formação de SOLID",
    title: "Aula 02 - Open-Closed Principle",
    description: "O - O código deve estar aberto para extensão, mas fechado para modificação.",
    date: "Terça - 01 de Abril - 10h00",
    isAvailable: true,
    isLive: false,
    teacher: teacher
  },
  {
    videoId: "kt1AqWcxoA0",
    formation: "Formação de SOLID",
    title: "Aula 03 - Liskov Substitution Principle",
    description: "L - Classes filhas devem poder substituir suas classes base.",
    date: "Quarta - 02 de Abril - 10h00",
    isAvailable: false,
    isLive: false,
    teacher: teacher
  },
  {
    videoId: "DVMSapFlFlo",
    formation: "Formação de SOLID",
    title: "Aula 04 - Interface Segregation Principle",
    description: "I - Prefira interfaces específicas em vez de uma genérica.",
    date: "Quinta - 03 de Junho - 10h00",
    isAvailable: false,
    isLive: false,
    teacher: teacher
  },
  {
    videoId: "qvMWR996T9w",
    formation: "Formação de SOLID",
    title: "Aula 05 - Dependency Inversion Principle",
    description: "D - Dependa de abstrações, não de implementações concretas.",
    date: "Sexta - 04 de Junho - 10h00",
    isAvailable: false,
    isLive: false,
    teacher: teacher
  }
])

User.create!(
  name: "Fulano de Tal",
  role: "Software Developer",
  avatar: "https://github.com/ermessonbraga.png"
)
