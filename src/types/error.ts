export interface IProdError {
  type: string;
  error: string;
}

export interface IDevError extends IProdError {
  stack: string;
  errorObj: Error;
}