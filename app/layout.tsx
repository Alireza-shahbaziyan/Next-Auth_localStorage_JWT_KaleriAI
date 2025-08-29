import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Condensed, Oswald as OswaldFont } from "next/font/google";
import { ThemeProvider } from "next-themes";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const robotoCondensed = Roboto_Condensed({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto-condensed",
});

const oswald = OswaldFont({
	weight: ["200", "300", "400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-oswald",
});

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl), 
	title: "KaleriAI – Smart Calorie & Diet Coach",
	description:
		"Track calories from a photo. KaleriAI uses depth + AI to estimate calories, macros, and offer personalized diet tips.",
	keywords: [
		"KaleriAI",
		"calorie from photo",
		"AI diet coach",
		"nutrition app",
		"macro tracker",
	],
	openGraph: {
		title: "KaleriAI – Smart Calorie & Diet Coach",
		description:
			"Track calories with one photo. Depth + AI segmentation for accurate calories, protein, carbs, and fat.",
		url: "https://kaleri.ai/",
		siteName: "KaleriAI",
		images: [{ url: "/og/kaleri-og.jpg", width: 1200, height: 630 }],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "KaleriAI – Smart Calorie & Diet Coach",
		description:
			"Track calories with one photo. Depth + AI segmentation for accurate calories and macros.",
		images: ["/og/kaleri-og.jpg"],
	},
	robots: { index: true, follow: true },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${robotoCondensed.variable} ${oswald.variable} bg-blue-950 min-h-svh text-white`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
