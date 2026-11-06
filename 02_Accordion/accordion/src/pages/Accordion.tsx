import { useState } from "react";

const Accordion = () => {
    const accordionData = [
        {
            id: 1,
            title: 'What is React?',
            data: 'React is a open source Javascript Library developed by Meta'
        },
        {
            id: 2,
            title: 'What is Angular?',
            data: 'Angular is a open source framework used to build Single Page Applications'
        },
        {
            id: 3,
            title: 'What are React Hooks?',
            data: 'Hooks allow functional components to use React features.'
        },
        {
            id: 4,
            title: 'What is JSX?',
            data: 'JSX is a syntax extension for JavaScript.'
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    }

    return (
        <div className="accordion">
            {accordionData.map((item, index) => (
                <div className="accordion-item mb-3 border rounded shadow-sm" key={item.id}>
                    <h4 className="accordion-header">
                        <button type="button" className={`accordion-button fw-semibold ${activeIndex !== index ? 'collapsed' : ''}`} onClick={() => toggleAccordion(index)}>{item.title}</button>
                    </h4>
                    {activeIndex === index && <div className="accordion-body text-secondary">{item.data}</div>}
                </div>
            ))}
        </div>
    );
}

export default Accordion;