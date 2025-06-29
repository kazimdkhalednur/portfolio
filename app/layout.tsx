import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Kazi Khaled Nur - Backend Developer',
	description:
		'Welcome to my portfolio! I am a passionate backend developer specializing in building server-side applications and robust APIs. With expertise in cloud infrastructure and database optimization, I create efficient and reliable backend solutions.',
	keywords: [
		'kazikhalednur',
		'Kazi Khaled Nur',
		'Kazi Khaled',
		'Khaled Nur',
		'Kazi',
		'Khaled',
		'Nur',
		'Backend Developer',
		'Backend Engineer',
		'Software Engineer',
		'API Development',
		'Database Design',
		'Cloud Computing',
		'Kazi Khaled Nur',
		'Python',
		'Django',
		'Django REST Framework',
		'REST API',
	],
	authors: [{ name: 'Kazi Khaled Nur' }],
	creator: 'Kazi Khaled Nur',
	openGraph: {
		title: 'Kazi Khaled Nur - Backend Developer Portfolio',
		description: 'Passionate backend developer crafting server-side application. Explore my projects and technical expertise.',
		url: 'https://kazikhalednur.com',
		siteName: 'Kazi Khaled Nur - Portfolio',
		images: [
			{
				url: '/khaled.jpg',
				width: 1200,
				height: 630,
				alt: 'Kazi Khaled Nur - Backend Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Kazi Khaled Nur - Backend Developer',
		description: 'Passionate backend developer crafting server-side application. Explore my projects and technical expertise.',
		creator: '@kazikhalednur',
		images: ['/khaled.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
