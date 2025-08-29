declare namespace TestTypes {
    type UserMock = {
      id: number
      name: string
      email?: string
    }
  
    type FlightSearchParams = {
      origin: string
      destination: string
      date: string
      passengers: number
    }

  }
  
  export interface MockResponse<T = any> {
    ok: boolean;
    status: number;
    json: () => Promise<T>;
  }