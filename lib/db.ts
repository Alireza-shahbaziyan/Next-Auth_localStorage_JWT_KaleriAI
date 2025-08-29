export type User = {
    id: string;
    phone: string;     // ✅ شماره تلفن
    name?: string;
    passwordHash: string;
  };
  
const g = global as unknown as { _users?: Map<string, User> };
if (!g._users) g._users = new Map();
export const users = g._users;
