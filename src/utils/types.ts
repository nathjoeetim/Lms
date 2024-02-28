import { string } from "zod";

export type SignInResponseType = {
  access_token: string;
};

export type PaginatedType<T> = {
  count: number;
  next: string | null;
  results: T[];
  previous: string | null;
};

export type Faculties = {
  count: number;
  next: null | string;
  previous: null;
  results: FacultyType[];
};

export type FacultyType = {
  id: number;
  name: string;
  short_name: string;
  dean?: string;
};

export type Department = {
  count: number;
  next: null | string;
  previous: null;
  results: DepartmentType[];
};

export type LecturerType = {
  id: number;
  user: string;
  lecturer_department: string;
  level: null;
  staff_id: string;
  designation: null;
  qualification: string;
  courses: null;
};

export type DepartmentType = {
  id: number;
  name: string;
  short_name: string;
  program_duration: string | null;
  qualification: string;
  created_at: string;
  updated_at: string;
  department_head: string;
  level: number[];
  courses: any[];
  students: any[];
  lecturers: any[];
};

export type UserType = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  residential_address: string;
  home_address: string;
  date_of_birth: string;
  gender: string;
  role: string;
  nationality: string;
  religion: string;
};

export type StudentType = {
  id: number;
  user: string;
  student_department: number;
  level: string;
  matric_no: string;
  courses: any[];
};

export type CreateDepartmentType = {
  name: string;
  short_name: string;
  program_duration: string;
  qualification: string;
  faculty: string;
  level: number;
};

export type EnrollStudentType = {
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  password: string;
  gender: string;
  role: string;
  matric_no: string;
  student_department: number;
  level: number;
};

export type CreateFacultyType = {
  name: string;
  short_name: string;
};

export type FindStudentByDepartment = {
  message: string;
  data: FindStudentInDartment[];
};

export type FindStudentInDartment = {
  student_department: string;
  user: string;
  level: number;
  matric_no: string;
  semester: null;
  courses: any[];
};

export type FindCourseByDepartment = {
  message: string;
  data: CoursesInDepartment[];
};

export type FindCourseInDepartment = {
  student_department: string;
  user: string;
  level: number;
  matric_no: string;
  semester: null;
  courses: any[];
};

export type CoursesInDepartment = {
  id: number;
  course_code: string;
  course_name: string;
  course_description: string;
  course_credit: number;
  course_unit: number;
  course_status: boolean;
  mark: string;
  created_at: string;
  updated_at: string;
};
