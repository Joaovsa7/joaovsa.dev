import React, { Fragment } from 'react';

const TarefasCompletas = (props) => {
    return ( 
            <Fragment>   
                {props.state.tarefasCompletas.length  ? (
                        <div className="div_complete">
                            <h2>Tarefas concluidas</h2>
                                { props.state.tarefasCompletas.map((tarefa, index) => (
                                        <div className="todo_list complete" key={tarefa.id}>
                                            <li key={tarefa.id}>
                                                {tarefa.nome}
                                            </li>
                                            <p>Concluida às {`${tarefa.hora}:${tarefa.minuto}:${tarefa.segundos} na data ${tarefa.dia}/${tarefa.mes}/${tarefa.ano}`}</p>
                                            <button className="btnUndo" onClick={() => props.undo(tarefa)}><i class="fas fa-trash-restore-alt"></i></button>
                                        </div>
                                        )
                                    )
                                } 
                    </div>
                ) : ''}
             </Fragment>
        );
    }
 
export default TarefasCompletas;