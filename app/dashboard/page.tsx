import DashboardLayout from "@/components/layouts/DashboardLayout";
import RequireAuth from "@/components/RequireAuth";
export default function DashboardPage() {
	return (
		<>
			<RequireAuth>
				<DashboardLayout />
			</RequireAuth>
		</>
	);
}
