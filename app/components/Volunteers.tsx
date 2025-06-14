'use client';

import { motion } from 'framer-motion';

export default function Volunteer() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center"
                >
                    Volunteer Experience
                </motion.h2>

                <div className="grid grid-cols-1 gap-8">
                    {[
                        {
                            role: 'Vice President - Development Wing',
                            org_name: 'Computer Programming Club',
                            org_url: 'https://cpc.daffodilvarsity.edu.bd',
                            location: 'Daffodil International University',
                            start_date: 'March 2025',
                            end_date: 'Now',
                            description:
                                'Leading the Development Wing: planning technical roadmaps, organizing internal hackathons, and mentoring members in full-stack development.',
                            extra_link: {
                                label: 'Committee Published in Facebook',
                                url: 'https://www.facebook.com/photo/?fbid=1103339331833674&set=pcb.1103348325166108'
                            }
                        },
                        {
                            role: 'Branch President',
                            org_name: 'Consumer Youth Bangladesh',
                            org_url: 'https://www.ccsbd.net/',
                            location: 'Daffodil International University',
                            start_date: 'November 2024',
                            end_date: 'Now',
                            description:
                                'Leading awareness campaigns on consumer rights, educating the public, and managing outreach programs in Dhaka to empower individuals about their legal protections.',
                            extra_link: {
                                label: 'Committee Published in Kalbela News',
                                url: 'https://www.kalbela.com/national/138224'
                            }
                        }, {
                            role: 'Treasurer',
                            org_name: 'Cyber Security Club',
                            org_url: 'https://csc.daffodilvarsity.edu.bd',
                            location: 'Daffodil International University',
                            start_date: 'June 2023',
                            end_date: 'June 2024',
                            description:
                                'Responsible for budgeting and managing funds, supporting event logistics, and promoting awareness about cybersecurity among university students.',
                            extra_link: {
                                label: 'Committee Published in Facebook',
                                url: 'https://www.facebook.com/photo/?fbid=988938542512845&set=a.751722202901148'
                            }
                        },
                    ].map((volunteer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-900/50 p-6 rounded-2xl shadow-lg border border-gray-700 mb-8"
                        >
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-white">{volunteer.role}</h3>
                                <p>
                                    <a
                                        href={volunteer.org_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-blue-400"
                                    >
                                        {volunteer.org_name}
                                    </a>{' '}
                                    - {volunteer.location}
                                </p>
                                <p className="text-sm text-gray-400">
                                    {volunteer.start_date} - {volunteer.end_date}
                                </p>
                            </div>

                            <p className="text-gray-300">{volunteer.description}</p>

                            {volunteer.extra_link && (
                                <p>
                                    <a
                                        href={volunteer.extra_link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-blue-400 underline hover:text-blue-500"
                                    >
                                        🔗 {volunteer.extra_link.label}
                                    </a>
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
