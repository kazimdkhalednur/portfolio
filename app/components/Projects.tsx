'use client';

import { motion } from 'framer-motion';

export default function Projects() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center"
				>
					Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Ecommerce API',
							link: 'https://github.com/kazimdkhalednur/ecommerce-api',
							description:
								'Developed an eCommerce platform with user authentication. Other features are under development.',
							tools: [
								'Django',
								'Django REST Framework',
								'Celery',
								'PostgreSQL',
								'Docker',
								'Docker Compose',
								'OpenAPI 3 (Swagger)',
								'Shipnx'
							]
						},
						{
							title: 'Ecommerce',
							link: 'https://github.com/kazimdkhalednur/ecommerce',
							description:
								'Developed a full stack eCommerce platform with user authentication, order management, and integrated payment gateway.',
							tools: ['Django', 'Django REST Framework', 'PostgreSQL', 'SSLCommerze']
						},
						{
							title: 'Elearning Platform',
							link: 'https://github.com/kazimdkhalednur/elearning-platform',
							description:
								'Developed a full stack Elearning platform with user authentication and course management for both students and teachers.',
							tools: [
								'Django',
								'Django REST Framework',
								'PostgreSQL',
								'OpenAPI 3 (Swagger)',
								'Next.js',
								'RTK Query'
							]
						}
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 p-6 rounded-2xl shadow-lg border border-gray-700 mb-8"
						>
							<div className="mb-4">
								<h3 className="text-2xl font-bold text-white">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="underline hover:text-blue-400"
									>
										{project.title}
									</a>
								</h3>
							</div>

							<p className="text-gray-300 mb-6">{project.description}</p>

							<div className="flex flex-wrap gap-2">
								{project.tools.map((tool, i) => (
									<span
										key={i}
										className="text-sm px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20"
									>
										{tool}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
