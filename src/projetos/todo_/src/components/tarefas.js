import React, { Fragment } from 'react';

const Tarefas = (props) => {
    console.log(props.state)
    return ( 
            <Fragment>
                    { props.state.listaDeTarefas.map((tarefa, index) => (
                                <div className="todo_list">
                                    <li key={tarefa.id} class="tarefa">
                                        {
                                            tarefa.editTarefa === true ? (
                                                <Fragment>
                                                    <input type="text"  className="edtInput" onChange={props.quandoMudar}  name="editValue" value={props.state.editValue} placeholder="Edite a tarefa" />
                                                    <button  class="btnIcon" onClick={() => props.editar(index, props.state.editValue)}><i className="fas fa-pencil-alt"></i></button>
                                                </Fragment>
                                            ) :   ( tarefa.nome )  
                                
                                        }
                                    </li>
                                    <div className="action_buttons">
                                        <button  className="btnIcon" onClick={() => props.tarefaCompleta(tarefa)}><i className="fas fa-check"></i></button>
                                        <button  className="btnIcon" onClick={() => props.habilitar(tarefa, index)}><i className={`${tarefa.editTarefa === false ? 'fas fa-pencil-alt' : 'fas fa-times'}`}></i></button>
                                        <button  className="btnIcon" onClick={() => props.remover(tarefa.id)}><i className="fas fa-trash"></i></button>
                                    </div> 
                                </div> 
                            )
                        )
                    } 
             </Fragment>

        );
    }
 
export default Tarefas;