import style from './Accordion.module.css';
import languages from '../../assets/languages.js';

export default function Accordion() {
    return (
        <div>
            <ul>
                {languages.map((language) => (
                    <AccordionItem
                        key={language.id}
                        title={language.title}
                        description={language.description}
                    />
                ))}
            </ul>
        </div>
    );
}

function AccordionItem({ title, description }) {
    return (
        <li>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}
