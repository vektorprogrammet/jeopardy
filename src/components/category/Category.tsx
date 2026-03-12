import Slot from "../slot/Slot";
import "./Category.css";
import data from "../../assets/data.json"

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
        <h2 style={{
        fontFamily: `${data.rest["font-family"]}`,
        fontSize: `${data.rest["font-size"]}`,
        color: `${data.rest["text-color"]}`,
        height: "3vw",
        }}>{name}</h2>

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