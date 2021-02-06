const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciante de vôo",
      lessons: [
        { id: 1, title: "Meditação e levitação" },
        { id: 2, title: "Arremesso de catapulta" },
      ],
    },
    {
      id: 2,
      title: "Voador intermediário",
      lessons: [
        { id: 3, title: "Noções basicas com o Super-man" },
        { id: 4, title: "Noções avançadas com o Goku do Dragon Ball" },
      ],
    },
  ],
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      // um novo state é criado e retornado
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
}
