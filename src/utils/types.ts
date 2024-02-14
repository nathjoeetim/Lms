export type SignInResponseType = {
  access_token: string;
};

export type PaginatedType<T> = {
  count: number;
  next: string | null;
  results: T[];
  previous: string | null;
};

export type FacultyType = {
  id: number;
  name: string;
  short_name: string;
  dean?: string
}

export type UserType = {
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
  residential_address: string,
  home_address: string,
  date_of_birth: string,
  gender: string,
  role: string,
  nationality: string,
  religion: string,
}