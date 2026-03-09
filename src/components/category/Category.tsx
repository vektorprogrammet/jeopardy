import Slot from "../slot/Slot";
import "./Category.css";

type Question = {
    value: number;
    field1: string;
    field2: string;
    type: string;
};

interface CategoryProps {
    name: string;
    questions: Question[];
}

export default function Category({ name, questions }: CategoryProps) {
    return (
        <div className="category-container">
        <h2>{name}</h2>

        <div className="category-slots">
            {questions.map((q, i) => (
            <Slot
                id={`${name}-${q.value}-${i}`}
                type={q.type}
                coverText={`$${q.value}`}
                field1={q.field1}
                field2={q.field2}
            />
            ))}
        </div>
        </div>
    );
}