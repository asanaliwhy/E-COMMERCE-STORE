export interface Address {
  street: string;
  apartment?: string;
  city: string;
  state?: string;
  country: string;
  zipCode: string;
}

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  role: "user" | "admin";
  isVerified: boolean;
  createdAt: string;
  defaultShippingAddress?: Address; // Reusable UX optimization
}

