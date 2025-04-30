import { createSlice } from '@reduxjs/toolkit'

export const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    currentResume: '',
    personalDetails: {
        name: '',
        jobTitle: '',
        email: '',
        phone: '',
        address: ''
    },
    professionalSummary: '',
    employementHistory: [
        {
            jobTitle: '',
            company: '',
            startDate: '',
            endDate: '',
            city: '',
            description: ''
        }
    ],
    education: [
        {
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            city: '',
            description: '',
        }
    ],
    skills: [
        {
            name: '',
        }
    ],
    loading: false,
  },
  reducers: {
    updatePersonalDetails: (state, action) => {
        state.loading = false;
        state.personalDetails = action.payload
    },
    updateProfessionalSummary: (state, action) => {
        state.loading = false;
        state.professionalSummary = action.payload
    },
    updateEmployementHistory: (state, action) => {
        state.loading = false;
        state.employementHistory = action.payload
    },
    updateEducation: (state, action) => {
        state.loading = false;
        state.education = action.payload
    },
    updateSills: (state, action) => {
        state.loading = false;
        state.education = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { 
    updatePersonalDetails, 
    updateProfessionalSummary, 
    updateEmployementHistory, 
    updateEducation, 
    updateSills 
} = resumeSlice.actions

export default resumeSlice.reducer