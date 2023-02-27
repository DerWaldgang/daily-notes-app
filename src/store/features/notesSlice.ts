import { createSlice } from "@reduxjs/toolkit";
import { INotes } from "@/types/notes.types";
import { v4 as uuid } from "uuid";
import { getLocalStorateInitialValue } from "@/helpers/localstorage";
import { createdAt } from "@/helpers/date";
import moment from "moment";
import { toast } from "react-toastify";

export interface NotesState {
  notes: INotes[];
}

const initialState: NotesState = {
  notes: getLocalStorateInitialValue(),
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state: NotesState, action) => {
      const newTask = {
        id: uuid(),
        title: action.payload.title,
        description: action.payload.description,
        createdAt: createdAt(),
      };
      state.notes.unshift(newTask)
      localStorage.setItem('notes', JSON.stringify(state.notes))
      toast.success('Note added successfully')
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('notes', JSON.stringify(state.notes))
      toast.success('Note deleted successfully')
    },
    editNoteTitle: (state, action) => {
      state.notes = state.notes.map((item) => {
        if(item.id === action.payload.id) {
          item.title = action.payload.title
        }
        return item
      })
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },

    editNoteDescription: (state, action) => {
      state.notes = state.notes.map((item) => {
        if(item.id === action.payload.id) {
          item.description = action.payload.description
        }
        return item
      })
      localStorage.setItem('notes', JSON.stringify(state.notes))

    },
    sortByDate: (state, action) => {
      if (action.payload === 'old') {
      state.notes = state.notes.sort((a, b) => {
          return moment(a.createdAt).diff(b.createdAt);
        });
      }

      if (action.payload === 'new') {
        state.notes = state.notes.sort((a, b) => {
            return moment(b.createdAt).diff(a.createdAt);
          });
        }
    },
  },
});

export const notesActions = notesSlice.actions;

export default notesSlice.reducer;
