import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <header className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold">Whitebox Learning</h1>
            </header>
            <main className="mt-8">
                <section className="mb-8">
                    <p className="text-lg">
                        This institute is primarily designed for candidates seeking employment opportunities. It offers a comprehensive learning experience through both classroom and recording sessions. Additionally, it provides job assistance to ensure a smooth transition into the industry.
                    </p>
                    <p className="text-lg mt-4">
                        Whitebox Learning specializes in Artificial Intelligence (AI) and Machine Learning (ML), offering an extensive range of courses and training programs in these fields. The institute's focus on AI and ML prepares students for the rapidly growing demand in these technologies, making them highly employable in the job market.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold mb-4">Our AI and ML Courses</h2>
                    <ul className="list-disc list-inside">
                        <li>Introduction to Artificial Intelligence</li>
                        <li>Machine Learning Fundamentals</li>
                        <li>Deep Learning and Neural Networks</li>
                        <li>Natural Language Processing</li>
                        <li>Computer Vision</li>
                        <li>Reinforcement Learning</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
