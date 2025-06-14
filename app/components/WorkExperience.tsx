'use client';

import { motion } from 'framer-motion';

export default function WorkExperience() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Work Experience
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{
						[
							{
								job_title: "Backend Developer",
								company_name: "Ubaky",
								company_url: "https://ubaky.com",
								company_location: "Pontevedra, Spain",
								start_date: "Oct 2023",
								end_date: "Apr 2025",
								work_type: "Remote, Part-time (20 hours/week)",
								description:
									"Contributed as a core backend developer, building the backend infrastructure of Ubaky from the ground up. Focused on database architecture, API development, background task handling, and production deployment.",
								key_achievement: [
									"Designed relational database schemas using PostgreSQL and Django ORM",
									"Built RESTful APIs with Django REST Framework powering all core modules",
									"Created OpenAPI 3 documentation for developer onboarding and integration",
									"Managed Linux server deployment using Nginx and Gunicorn",
									"Implemented security best practices (auth, CSRF, XSS protections)",
									"Collaborated with frontend team for seamless integration and testing",
									"Maintained Git version control and proper backend documentation"
								],
								tools: [
									"Python",
									"Django",
									"Django REST Framework",
									"PostgreSQL",
									"Docker",
									"OpenAPI 3",
									"Linux",
									"Nginx",
									"Gunicorn",
									"Git"
								]
							},
							{
								job_title: "Backend Developer",
								company_name: "ICPC Asia Dhaka Regional Website",
								company_url: "https://icpc.daffodilvarsity.edu.bd",
								company_location: "Dhaka, Bangladesh",
								start_date: "October 2024",
								end_date: "December 2025",
								work_type: "Part-Time, Onsite (20 hours/week)",
								description:
									"Served as a backend developer for the official ICPC Asia Dhaka Regional Website. Responsible for database design, API development, and payment gateway integration.",
								key_achievement: [
									"Developed backend software using Python and the Django framework",
									"Designed and implemented the entire database architecture using Django ORM",
									"Developed RESTful APIs with Django REST Framework",
									"Integrated payment gateway using SSLCommerze",
									"Wrote API documentation following OpenAPI standards"
								],
								tools: [
									"Python",
									"Django",
									"Django REST Framework",
									"MySQL",
									"cPanel",
									"SSLCommerze"
								]
							},
							{
								job_title: "Full Stack Developer",
								company_name: "DataByte",
								company_url: "https://databyte.ch",
								company_location: "Switzerland",
								start_date: "August 2023",
								end_date: "August 2023",
								work_type: "Part-Time, Remote (10 hours/week)",
								description:
									"Developed full stack software using the Django framework, handling both backend and frontend responsibilities.",
								key_achievement: [
									"Developed full stack software with Python Django framework and related dependencies",
									"Developed frontend using Django templates"
								],
								tools: ["Python", "Django", "PostgreSQL"]
							},
							{
								job_title: "Junior Backend Developer",
								company_name: "Hackverse",
								company_url: "https://hackverse.dev",
								company_location: "Dhaka, Bangladesh",
								start_date: "December 2022",
								end_date: "August 2023",
								work_type: "Part-Time, Remote (10 hours/week)",
								description:
									"Worked as a junior backend developer in a collaborative team, contributing to backend development and Discord bot integration.",
								key_achievement: [
									"Developed backend software with Python Django framework and dependencies as part of a team",
									"Designed and implemented the database using Django ORM",
									"Developed RESTful APIs using Django REST Framework",
									"Integrated Discord Bot with the backend system"
								],
								tools: ["Python", "Django", "PostgreSQL", "Heroku", "Discord"]
							}
						].map((exp, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="bg-gray-900/50 p-6 rounded-2xl shadow-lg border border-gray-700 mb-8"
							>
								<div className="mb-4">
									<h3 className="text-2xl font-bold text-white">{exp.job_title}</h3>
									<p>
										<a
											href={exp.company_url}
											target="_blank"
											rel="noopener noreferrer"
											className="underline hover:text-blue-400"
										>
											{exp.company_name}
										</a>{" "}
										- {exp.company_location}
									</p>
									<p className="text-sm text-gray-400">
										{exp.start_date} - {exp.end_date}
									</p>
									<p className="text-sm text-gray-400">{exp.work_type}</p>
								</div>

								<p className="text-gray-300 mb-6">{exp.description}</p>

								<div className="mb-6">
									<h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
									<ul className="list-disc list-inside space-y-2 text-gray-300">
										{exp.key_achievement.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								</div>

								<div className="flex flex-wrap gap-2">
									{exp.tools.map((tool, i) => (
										<span
											key={i}
											className="text-sm px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20"
										>
											{tool}
										</span>
									))}
								</div>
							</motion.div>
						))
					}
				</div>
			</div>
		</section>
	);
}
