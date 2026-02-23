export const appReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_SKILL":
      return {
        ...state,
        skills: state.skills.filter(skill => skill.id !== action.payload)
      };

    case "ADD_SKILL":
      return {
        ...state,
        skills: [...state.skills, action.payload]
      };

    case "CLEAR_SKILLS":
      return {
        ...state,
        skills: []
      };

    default:
      return state;
  }
};