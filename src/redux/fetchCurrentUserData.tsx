import { Dispatch, createSlice } from "@reduxjs/toolkit";
import {
  Department,
  DepartmentType,
  Faculties,
  FacultyType,
  LecturerType,
  StudentType,
  UserType,
} from "@/utils/types";
import {
  CurrentUser,
  DepartmentUrl,
  FacultiesUrl,
  LecturersUrl,
  StudentUrl,
} from "@/utils/network";
import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/navigation";

const CurrentUserData = createSlice({
  name: "CurrentUser",
  initialState: {
    currentUser: {} as UserType,
    allDepartment: [] as DepartmentType[],
    allFaculties: [] as FacultyType[],
    allLectures: [] as LecturerType[],
    allStudents: [] as StudentType[],
  },
  reducers: {
    onGetCurrentUserDataMethod(state, action) {
      state.currentUser = action.payload;
    },

    onGetDepartmentalData(state, action) {
      state.allDepartment = action.payload;
    },

    onGetFacultyData(state, action) {
      state.allFaculties = action.payload;
    },

    onGetAllLecturerData(state, action) {
      state.allLectures = action.payload;
    },

    onGetAllStudentDataMethos(state, action) {
      state.allStudents = action.payload;
    },
  },
});

export const {
  onGetCurrentUserDataMethod,
  onGetDepartmentalData,
  onGetFacultyData,
  onGetAllLecturerData,
  onGetAllStudentDataMethos,
} = CurrentUserData.actions;
export default CurrentUserData;

export async function FetchData(dispatch: Dispatch, router: any) {
  const { axiosHandler } = useAxios(router);

  const response = await axiosHandler<UserType>(CurrentUser, "GET", null, true);

  const deptRequest = await axiosHandler<Department>(
    DepartmentUrl,
    "GET",
    null,
    true
  );
  const facultyRequest = await axiosHandler<Faculties>(
    FacultiesUrl,
    "GET",
    null,
    true
  );

  const lecturerRequest = await axiosHandler<LecturerType>(
    LecturersUrl,
    "GET",
    null,
    true
  );

  const getAllStudentRequest = await axiosHandler<StudentType>(
    StudentUrl,
    "GET",
    null,
    true
  );

  if (
    response &&
    deptRequest &&
    facultyRequest &&
    lecturerRequest &&
    getAllStudentRequest
  ) {
    dispatch(onGetCurrentUserDataMethod(response));
    dispatch(onGetDepartmentalData(deptRequest.results));
    dispatch(onGetFacultyData(facultyRequest.results));
    dispatch(onGetAllLecturerData(lecturerRequest));
    // dispatch(onGetAllStudentDataMethos(getAllStudentRequest));
  }
}
