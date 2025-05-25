export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  data: {
    user: {
      name: string;
      email: string;
      role: "user" | "admin" | string;
      isEmailVerified: boolean;
      id: string;
    };
    accessToken: {
      token: string;
      expires: string; // ISO string date
    };
  };
}

export interface RegisterRequest {  
  email: string;  
  password: string;  
  name: string;  
}

export interface RegisterResponse {  
  message: string;  
  data: {  
    user: UserInRegisterResponse;  
  };  
}  
  
interface UserInRegisterResponse {  
  id: string;           // MongoDB _id converted to string  
  name: string;  
  email: string;  
  // password field excluded for security  
  role: 'user' | 'admin' | 'order_manager';  
  address?: string;     // Optional field  
  phone?: string;       // Optional field  
  isEmailVerified: boolean;  
  createdAt: Date;  
  updatedAt: Date;  
}