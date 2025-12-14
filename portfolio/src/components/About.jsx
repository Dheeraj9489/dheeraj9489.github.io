import React from 'react';

const About = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div>
                <p className="mb-4 text-slate-400">
                    I am currently a Bachelor's Student in Computer Science at <a href="https://www.mst.edu/" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Missouri University of Science and Technology</a>.
                </p>
                <p className="mb-4 text-slate-400">
                    My passion lies in building software that solves real-world problems. I have experience as an <span className="font-medium text-slate-200">Artificial Intelligence Research Assistant</span>, identifying biases in healthcare systems, and have led teams as the <span className="font-medium text-slate-200">Vice President</span> of the Google Developer's Student Club, and Officers of IEEE-HKN and ACM.
                </p>
                <p className="mb-4 text-slate-400">
                    I enjoy working with a variety of technologies, including <span className="font-medium text-slate-200">React, Python, C++, and Cloud technologies</span>. When I'm not coding, I'm likely exploring new tech stacks or participating in hackathons.
                </p>
            </div>
        </section>
    );
};

export default About;
