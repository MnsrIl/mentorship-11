import React from 'react';

interface TabProps {
    title: string;
    children: React.ReactNode;
}

const Section = ({ title, children }: TabProps) => {
    return (
        <>
            <h5 className="p-3 mb-0 border-1 border">{title}</h5>
            <section className="p-3 bg-white">
                {children}
            </section>
        </>
    );
};

export default Section;
