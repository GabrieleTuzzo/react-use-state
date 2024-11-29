import style from './Accordion.module.css';
import languages from '../../assets/languages.js';
import { useState } from 'react';

export default function Accordion() {
    const [activeId, setActiveId] = useState();

    function handleToggle(id) {
        setActiveId(activeId === id ? null : id);
    }

    return (
        <div>
            <ul>
                {languages.map((language) => (
                    <AccordionItem
                        key={language.id}
                        id={language.id}
                        title={language.title}
                        description={language.description}
                        active={activeId === language.id ? true : false}
                        onClick={handleToggle}
                    />
                ))}
            </ul>
        </div>
    );
}

function AccordionItem({ id, title, description, active, onClick }) {
    return (
        <li>
            <h3 onClick={() => onClick(id)}>{title}</h3>
            {active && <p>{description}</p>}
        </li>
    );
}
