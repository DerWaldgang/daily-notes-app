export const getLocalStorateInitialValue = () => {
    
  if (typeof window !== "undefined" && localStorage.getItem("notes")) {

    const notes = localStorage.getItem("notes");

    if (typeof notes === "string") {
      return JSON.parse(notes);
    }
  }
  return [];
};
