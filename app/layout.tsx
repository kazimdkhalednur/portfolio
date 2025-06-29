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
	title: 'Kazi Khaled Nur - Software Engineer',
	description:
		'Experienced backend developer building secure, scalable APIs using Python & Django. Explore my projects and skills in cloud and database optimization.',
	keywords: [
		'kazikhalednur',
		'KaziKhaledNur',
		'Kazi Khaled Nur',
		'Kazi Khaled',
		'Khaled Nur',
		'Kazi',
		'Khaled',
		'Nur',
		'Software Engineer',
		'Backend Developer',
		'Backend Engineer',
		'API Development',
		'Database Design',
		'Cloud Computing',
		'Python',
		'Django',
		'Django REST Framework',
		'REST API',
	],
	authors: [{ name: 'Kazi Khaled Nur' }],
	creator: 'Kazi Khaled Nur',
	openGraph: {
		title: 'Kazi Khaled Nur - Software Engineer Portfolio',
		description: 'Experienced backend developer building secure, scalable APIs using Python & Django. Explore my projects and skills in cloud and database optimization.',
		url: 'https://kazikhalednur.com',
		siteName: 'Kazi Khaled Nur - Portfolio',
		images: [
			{
				url: 'https://kazikhalednur.com/khaled.jpg',
				width: 1200,
				height: 630,
				alt: 'Kazi Khaled Nur - Software Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Kazi Khaled Nur - Software Engineer',
		description: 'Experienced backend developer building secure, scalable APIs using Python & Django. Explore my projects and skills in cloud and database optimization.',
		creator: '@kazikhalednur',
		images: ['https://kazikhalednur.com/khaled.jpg'],
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
