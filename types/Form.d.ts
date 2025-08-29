export type LoginFormData = {
	email: string;
	password: string;
};

export type SignUpFormData = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};

export type FormPhone = {
	phone: string;
	password: string;
  };

export type User = { 
	id: string; 
	email: string; 
	name?: string; 
	passwordHash: string 
  };