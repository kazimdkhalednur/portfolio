'use client';

import { motion } from 'framer-motion';

export default function Education() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center"
                >
                    Education
                </motion.h2>

                <div className="grid grid-cols-1 gap-1">
                    {[
                        {
                            institution: 'Daffodil International University',
                            location: 'Dhaka, Bangladesh',
                            degree: 'BSc in Computer Science and Engineering (CSE)',
                            start_date: 'April 2022',
                            end_date: 'Expected April 2026',
                            cgpa: '3.74 out of 4.00',
                        },
                        // {
                        //     institution: 'Gazipur Cantonment College',
                        //     location: 'Gazipur, Bangladesh',
                        //     degree: 'Higher School Certificate (HSC), Science',
                        //     start_date: 'June 2018',
                        //     end_date: 'June 2020',
                        //     gpa: '5.00 out of 5.00',
                        // },
                        // {
                        //     institution: 'M E H Arif College',
                        //     location: 'Gazipur, Bangladesh',
                        //     degree: 'Secondary School Certificate (SSC), Science',
                        //     start_date: 'January 2016',
                        //     end_date: 'June 2018',
                        //     gpa: '5.00 out of 5.00',
                        // },
                        // {
                        //     institution: 'HATAYKHARI PUBLIC SCHOOL & COLLEGE',
                        //     location: 'Gazipur, Bangladesh',
                        //     degree: 'Primary Education Certificate (PEC)',
                        //     start_date: 'January 2012',
                        //     end_date: 'December 2012',
                        //     gpa: '5.00 out of 5.00',
                        // }
                    ].map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-900/50 p-6 rounded-2xl shadow-lg border border-gray-700 mb-6"
                        >
                            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                            <p>
                                <span className="text-white">{edu.institution}</span> - {' '}
                                <span className="text-gray-400">{edu.location}</span>
                            </p>
                            <p className="text-sm text-gray-400">
                                {edu.start_date} - {edu.end_date}
                            </p>
                            {edu.cgpa && (
                            <p className="text-sm text-gray-400">CGPA: {edu.cgpa}</p>
                            )}
                            {edu.gpa && (
                            <p className="text-sm text-gray-400">GPA: {edu.gpa}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
