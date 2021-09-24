import React from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
    const [title, setTitle] = React.useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd(title)
            setTitle('')
        }
    }

    return (
        <div className="input-field mt2">
            <input id="title"
                   value={title}
                   onChange={changeHandler}
                   type="text"
                   placeholder="Введите название дела"
                   onKeyPress={keyPressHandler}
            />
            <label className="active" htmlFor="title">
                Введите название дела
            </label>
        </div>
    )
}
