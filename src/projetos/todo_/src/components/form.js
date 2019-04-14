import React from 'react';

const FormTarefa = (props) => {
    return ( 
            <form onSubmit={(e) => e.preventDefault()}>
                <h1>Tarefas</h1>
                <div>
                    <input type="text"  name="todoValue" onChange={props.quandoMudar} value={props.state.todoValue} placeholder="Adicione a sua tarefa" />
                    <button type="submit"   onClick={() => props.criarTarefa()}>+</button>
                </div>
            </form>
        );
    }
 
export default FormTarefa;