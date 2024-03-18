import { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setcategory] = useState("");

    const hadleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        console.log(value, category);
        addTodo(value, category);
        setValue("");
        setcategory("");
    };

    return (
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={hadleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o título"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <select value={category} onChange={(e) => setcategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    );
};

export default TodoForm;