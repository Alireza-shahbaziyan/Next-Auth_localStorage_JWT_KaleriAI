import { FieldError } from "react-hook-form";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: FieldError;
}

const InputField: React.FC<InputFieldProps> = ({ label, error, ...props }) => {
	return (
		<div>
			<label className="block text-sm text-white mb-1">{label}</label>
			<input
				{...props}
				className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white 
                 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
			/>
			{error && (
				<p className="text-red-500 text-sm mt-1">{error.message}</p>
			)}
		</div>
	);
};

export default InputField;
