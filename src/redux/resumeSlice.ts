import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the state interface
interface ResumeState {
    currentResume: string;
    personalDetails: {
      name: string;
      jobTitle: string;
      email: string;
      phone: string;
      address: string;
    };
    professionalSummary: string;
    employementHistory: {
      jobTitle: string;
      company: string;
      startDate: string;
      endDate: string;
      city: string;
      description: string;
    }[];
    education: {
      school: string;
      degree: string;
      startDate: string;
      endDate: string;
      city: string;
      description: string;
    }[];
    skills: {
      name: string;
    }[];
    loading: boolean;
}

// Initial state with type annotation
const initialState: ResumeState = {
    currentResume: '',
    personalDetails: {
      name: '',
      jobTitle: '',
      email: '',
      phone: '',
      address: '',
    },
    professionalSummary: '',
    employementHistory: [
      {
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: '',
        city: '',
        description: '',
      },
    ],
    education: [
      {
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        city: '',
        description: '',
      },
    ],
    skills: [
      {
        name: '',
      },
    ],
    loading: false,
};

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updateCurrentResume: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.currentResume = action.payload
    },
    updatePersonalDetails: (state, action: PayloadAction<ResumeState['personalDetails']>) => {
        state.loading = false;
        state.personalDetails = action.payload
    },
    updateProfessionalSummary: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.professionalSummary = action.payload
    },
    updateEmployementHistory: (state, action: PayloadAction<ResumeState['employementHistory']>) => {
        state.loading = false;
        state.employementHistory = action.payload
    },
    updateEducation: (state, action: PayloadAction<ResumeState['education']>) => {
        state.loading = false;
        state.education = action.payload
    },
    updateSkills: (state, action: PayloadAction<ResumeState['skills']>) => {
        state.loading = false;
        state.skills = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { 
    updateCurrentResume,
    updatePersonalDetails, 
    updateProfessionalSummary, 
    updateEmployementHistory, 
    updateEducation, 
    updateSkills 
} = resumeSlice.actions

// export const selectCount = (state) => state.resume.value;

export default resumeSlice.reducer