import React, { Component } from 'react';
import logo from './logo.svg';
import './app.scss'

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
  
  criarTarefa() {
    if(this.state.todoValue === ""){
      return alert('Voce precisa colocar algo');
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
    if (e.keyCode == 13) return this.sendData()
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
  
  handleChange = (event) => {
    const target = event.target
    const name = target.name
    this.setState({[name]: event.target.value})
    console.log(name)
  }
  removeTarefa = id => {
    this.setState(state => {
      const listaDeTarefas = state.listaDeTarefas.filter(item => item.id != id);
      return {
        listaDeTarefas
      }
    })}

    editTarefaObject(id){
      const item = Object.assign({}, this.state.listaDeTarefas[id], {editTarefa:true});
       this.state.listaDeTarefas[id] = item;
       this.setState({listaDeTarefas: this.state.listaDeTarefas, editTarefa: ''});
     }
    editTarefa(id, name){
      const lista = this.state.listaDeTarefas;
      if(name === ""){
        throw console.error('a');
      }
      lista[id] = {id: id, nome: name};
      this.setState({lista: lista, editValue: ''})
    }

    render() {

      return (
        <div className="App">
        <header className="App-header">
        <div id="container">
        <form onSubmit={this.onSubmit}>
            <div>
                  <h4>insira uma nova tarefa</h4>
            <input type="text"  name="todoValue" value={this.state.todoValue} onChange={this.handleChange} placeholder="Nome da tarefa" />
            <button type="submit"   onClick={() => this.criarTarefa()}>Enviar</button>
            </div>
        </form>
        <h4>Tarefas pendentes</h4>
        {
          this.state.listaDeTarefas.length > 0 ? (this.state.listaDeTarefas.map((tarefa, index) => (
            <div id="todo_list">
            <li key={tarefa.id} class="tarefa">
            {tarefa.nome}
            </li>
            <button  class="btn" onClick={() => this.removeTarefa(tarefa.id)}>Apagar Tarefa</button>
            <button  class="btn" onClick={() => this.tarefaCompletada(tarefa)}>Marcar como completa</button>
            <button  class="btn" onClick={() => this.editTarefaObject(index)}>Editar tarefa</button>
            {console.table(tarefa)}
            { tarefa.editTarefa === true && (
              <div>
                <input type="text" name="editValue" value={this.state.editValue} onChange={this.handleChange} defaultValue="" placeholder="Nome da tarefa" />
                <button  class="btn" onClick={() => this.editTarefa(index, this.state.editValue)}>Editar tarefa</button>
            </div>
            )
            
            }
            
            </div>
            
            ))) : <div>Sem tarefas no momento </div>
          }
          <h4>{this.state.tarefasCompletas.length ? `Tarefas concluidas ${this.state.tarefasCompletas.length}` : "Você não concluiu nenhuma tarefa"}</h4>
          {
            this.state.tarefasCompletas.map(tarefa => (
              <div>
              <li key={tarefa.id} class="tarefa tarefaC">
              {tarefa.nome}
              </li>
              <button class="btn"  class="btn" onClick={() => this.backToList(tarefa)}>Desfazer</button>
              </div>
              
              ))
            }
        </div>
      
            </header>
            </div>
            );
          }
        }
        
        export default App;
        