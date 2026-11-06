import { useState } from "react";

const MultiOpenAccordion = () => {
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

    const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

    const toggleAccordion = (index: number) => {
        if(activeIndexes.includes(index)) {
            setActiveIndexes(activeIndexes.filter(item => item !== index));
        } else {
            setActiveIndexes([...activeIndexes, index]);
        }
    }

    const expandAll = () => {
        setActiveIndexes(accordionData.map((_, index) => index));
    }

    const collapseAll = () => {
        setActiveIndexes([]);
    }

    return(
        <div className="container">
            <div className="mb-3 d-flex gap-3">
                <button className="btn btn-info btn-sm" onClick={() => expandAll()}>Expand All</button>
                <button className="btn btn-success btn-sm" onClick={() => collapseAll()}>Collapse All</button>
            </div>
            <div className="accordion">
                {accordionData.map((data, index) => (
                    <div className="accordion-item mb-4 border rounded shadow-sm" key={data.id}>
                        <h4 className="accordion-header">
                            <button className={`accordion-button ${activeIndexes.includes(index) ? 'collapsed' : ''}`} onClick={() => toggleAccordion(index)}>{data.title}</button>
                        </h4>
                        {activeIndexes.includes(index) && <div className="accordion-body">{data.data}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MultiOpenAccordion;