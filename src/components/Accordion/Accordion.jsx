import style from './Accordion.module.css';
import languages from '../../assets/languages.js';
import { useState } from 'react';

export default function Accordion() {
    const [activeId, setActiveId] = useState();

    function handleToggle(id) {
        setActiveId(activeId === id ? null : id);
    }

    function getDescription(arr, id) {
        const element = arr.find((el) => el.id === id);
        return element && element.description;
    }

    return (
        <>
            <div className={style.Wrapper}>
                <ul className={style.List}>
                    {languages.map((language) => (
                        <AccordionItem
                            key={language.id}
                            id={language.id}
                            title={language.title}
                            currentActive={activeId}
                            onClick={handleToggle}
                        />
                    ))}
                </ul>
                {activeId && (
                    <div className={style.Description}>
                        <p>{getDescription(languages, activeId)}</p>
                    </div>
                )}
            </div>
        </>
    );
}

function AccordionItem({ id, title, currentActive, onClick }) {
    return (
        <>
            <li>
                <h3
                    className={`${style.Button} ${
                        currentActive === id ? style.Active : ''
                    }`}
                    onClick={() => onClick(id)}
                >
                    {title}
                </h3>
            </li>
        </>
    );
}
