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
  student_department: string;
  level: string;
  matric_no: string;
  courses: any[];
};
