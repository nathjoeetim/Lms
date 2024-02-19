import { createSlice } from "@reduxjs/toolkit";

type SignUpDataModel = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  role: string;
  password: string;
  gender: string;
  is_staff: boolean;
  passport: string;
};

const StudentSignup = createSlice({
  name: "AuthenticateSignup",
  initialState: {
    studentEnrollmentData: {} as SignUpDataModel, // Adjusted initialization
  },
  reducers: {
    onGetFormDataInput (state , action ) {
			state.studentEnrollmentData = action.payload
		}
  },
});

export const { actions: UserInterfaceActions } = StudentSignup;
export default StudentSignup.reducer; // Export reducer directly
