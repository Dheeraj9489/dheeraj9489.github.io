import React from 'react';

const experiences = [
    {
        date: 'Jan 2024 — Present',
        title: 'Artificial Intelligence Research Assistant',
        company: 'Missouri S&T Computer Science Department',
        description: 'Identified age-related biases in kidney transplant matching systems using Rashomon sets, enhancing fairness insights for an NSF-funded AI for Healthcare project. Improved survey engagement among medical professionals, increasing response accuracy and length by 55% compared to traditional questionnaires. Developed a full-stack gamified feedback platform leveraging React, FastAPI, and PostgreSQL to deliver interactive survey experiences.',
        skills: ['React', 'FastAPI', 'PostgreSQL', 'Python', 'AI/ML'],
        link: 'https://sites.mst.edu/aifortransplant/team/'
    },
    {
        date: 'Jan 2024 — May 2024',
        title: 'Vice President',
        company: "Google Developer's Student Club, Missouri S&T",
        description: 'Deployed the MST GDSC website built with Angular and Python. Reviewed and debugged over 1,000 lines of code to resolve outstanding issues in the team\'s GitHub repository. Planned and executed google developer product workshops at the University.',
        skills: ['Angular', 'Python', 'Leadership', 'Event Planning'],
        link: 'https://gdsc-snt.com/'
    },
    {
        date: 'May 2022 — Dec 2023',
        title: 'Software Flight Division Member',
        company: 'Multirotor Design Team, Missouri S&T',
        description: 'Programmed autonomous drone navigation using MavSDK, PX4, and C++, enabling reliable and successful flight operations. Developed and maintained comprehensive unit tests to ensure code reliability. Reviewed and debugged over 1,000 lines of code to resolve outstanding issues in the team\'s GitHub repository.',
        skills: ['C++', 'MavSDK', 'PX4', 'Unit Testing', 'Drone Autonomy'],
        link: 'https://multirotor.mst.edu/'
    }
];

const Experience = () => {
    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            <div>
                <ol className="group/list">
                    {experiences.map((exp, index) => (
                        <li key={index} className="mb-12">
                            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={exp.date}>
                                    {exp.date}
                                </header>
                                <div className="z-10 sm:col-span-6">
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        <div>
                                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href={exp.link} target="_blank" rel="noreferrer" aria-label={`${exp.title} at ${exp.company}`}>
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>{exp.title} · <span className="inline-block">{exp.company}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                                            </a>
                                        </div>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal text-slate-400">
                                        {exp.description}
                                    </p>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {exp.skills.map((skill, i) => (
                                            <li key={i} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                    {skill}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Experience;
