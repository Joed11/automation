export interface GeneralErrorSummary {
  message: string;
  status: number;
  statusCode: number;
  response: {
    status: number;
    body: any;
    message: string;
  };
}
