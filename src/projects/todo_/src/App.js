import React, { Component, Fragment } from 'react';
import './app.scss'
import SimpleStorage from "react-simple-storage";

class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      todoValue: '',
      editValue: '',
      listaDeTarefas: [],
      tarefasCompletas: [],
    }
  }

  criarTarefa(){
    if(this.state.todoValue === ""){
      return  new console.error('Voce precisa colocar algo');
    }
    let data = new Date()
    let diaDaSemana = data.getTimezoneOffset();
    console.log(data)
    const nome = this.state.todoValue
    const novaTarefa = { ...this.state.listaDeTarefas, nome, id: this.state.listaDeTarefas.length + 1, date: diaDaSemana , editTarefa: false}
    this.setState({listaDeTarefas: [...this.state.listaDeTarefas, novaTarefa]})
  }

  onSubmit = e => {
    e.preventDefault();
    if (e.keyCode === 13) return this.sendData()
    this.setState({todoValue: ""})
  }
  
  tarefaCompletada = (tarefa) => {
    this.setState(estado => ({
      listaDeTarefas: estado.listaDeTarefas.filter((excluir) => excluir.id !== tarefa.id),
      tarefasCompletas: estado.tarefasCompletas.concat([tarefa]),
    }))
  }
  
  backToList = (tarefa) => {
    this.setState(estado => ({
      tarefasCompletas: estado.tarefasCompletas.filter((any) => any.id !== tarefa.id),
      listaDeTarefas: [...this.state.listaDeTarefas, tarefa],
    }))
  }
  
  quandoMudar = (event) => {
    const target = event.target
    const name = target.name
    this.setState({[name]: event.target.value})
  }
  removeTarefa = id => {
    this.setState(state => {
      const listaDeTarefas = state.listaDeTarefas.filter(item => item.id !== id);
      return {
        listaDeTarefas
      }
    })}

    habilitarEdicao(id){
      const lista = this.state.listaDeTarefas
      const item = Object.assign({}, lista[id], {editTarefa:true});
      lista[id] = item;
       this.setState({listaDeTarefas: lista});
     }
     
    editarAtarefa(id, name){
      const lista = this.state.listaDeTarefas;
      if(name === ""){
        throw console.error('a');
      }
      const newValue = {id: id, nome: name}
      lista[id] = newValue;
      this.setState({lista: lista, editValue: ''})
      localStorage.setItem("tarefa", lista)
    }

    render() {

      return (
        <div className="App">
          <SimpleStorage parent={this} />
        <header className="App-header">
        <div id="container">
        <form onSubmit={this.onSubmit}>
          <h1>Tarefas</h1>
            <div>
              <input type="text"  name="todoValue" value={this.state.todoValue} onChange={this.quandoMudar} placeholder="Adicione a sua tarefa" />
              <button type="submit"   onClick={() => this.criarTarefa()}>+</button>
            </div>
        </form>
        {
          this.state.listaDeTarefas.length > 0 ? (this.state.listaDeTarefas.map((tarefa, index) => (
            <div className="todo_list">
            <li key={tarefa.id} class="tarefa">
            {tarefa.editTarefa === true ? (
            <Fragment>
            <input type="text" name="editValue" value={this.state.editValue} onChange={this.quandoMudar}  placeholder="Edite a tarefa" />
            <button  class="btn" onClick={() => this.editarAtarefa(index, this.state.editValue)}>Editar tarefa</button>
          </Fragment>
            ) :   tarefa.nome 
            
             }
         
            </li>
            <div className="action_buttons">
              <button  class="btn" onClick={() => this.tarefaCompletada(tarefa)}><i class="fas fa-check"></i></button>
              <button  class="btn" onClick={() => this.habilitarEdicao(index)}><i class="fas fa-pencil-alt"></i></button>
              <button  class="btn" onClick={() => this.removeTarefa(tarefa.id)}><i class="fas fa-trash"></i></button>
            </div>            
            </div>
            
            ))) : <p>Você ainda não tem nenhuma tarefa pendente!</p>
          }
          {this.state.tarefasCompletas.length >= 1 && 
                    <div className="div_complete">
                    <h2>Tarefas concluidas</h2>
              {
                this.state.tarefasCompletas.map(tarefa => (
               
                    <div className="todo_list complete">
                  <li key={tarefa.id}>
                  {tarefa.nome}
                  </li>
                  <button className="btnUndo" onClick={() => this.backToList(tarefa)}><i class="fas fa-trash-restore-alt"></i></button>
                  </div>
                  ))
                
                }
                              </div> 
          
          }
   
        </div>
            </header>
            </div>
            );
          }
        }
        
        export default App;
        