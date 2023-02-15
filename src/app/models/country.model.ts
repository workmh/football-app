export interface Country {
  code: string;
  flag: string;
  name: string;

}

export interface Paging {
  current: number;
  total: number;


}

export interface CountryTotal {
  get: string;
  parameters: string[];
  errors: string[];
  results: number;
  paging: Paging;
  response: Country[];



}
