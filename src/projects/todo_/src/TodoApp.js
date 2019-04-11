import React, { Component, Fragment } from 'react';
import './todo_app.scss'
import Tarefas from './components/tarefas';
import WrapperComponent from './components/wrapper';
import FormTarefa from './components/form';
import TarefasCompletas from './components/tarefas_concluidas';

class TodoApp extends Component {
  constructor(props){
    super(props)
    this.state = { 
      todoValue: '',
      editValue: '',
      listaDeTarefas: [],
      tarefasCompletas: [],
    }
    this.criarTarefa = this.criarTarefa.bind(this)
    this.habilitarEdicao = this.habilitarEdicao.bind(this)
    this.editarAtarefa = this.editarAtarefa.bind(this)
    this.quandoMudar = this.quandoMudar.bind(this)
  }

  criarTarefa = () => {
    if(this.state.todoValue === ""){
      throw alert('digite algo')
    }
    const nome = this.state.todoValue
    const novaTarefa = { 
        ...this.state.listaDeTarefas, 
        nome, 
        id: this.state.listaDeTarefas.length + Math.random().toString(36).substring(7) 
        editTarefa: false
      }
    this.setState({listaDeTarefas: [...this.state.listaDeTarefas, novaTarefa], todoValue: ''})
  }

  tarefaCompletada = (tarefa) => {
    //definindo as datas
    const agora = new Date()
    const dia = agora.getDate()
    const mes = agora.getUTCMonth() + 1
    const ano = agora.getUTCFullYear()
    const hora = agora.getHours();
    const minuto = agora.getMinutes();
    const segundos = agora.getSeconds();
    //criando um obj com as novas datas
    tarefa = {...tarefa, hora, minuto, segundos, dia, mes, ano, editTarefa: false}
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

    habilitarEdicao(tarefa, id){
      const lista = this.state.listaDeTarefas
      const item = Object.assign({}, lista[id],{ editTarefa: !tarefa.editTarefa });
      lista[id] = item;
      this.setState({listaDeTarefas: lista, editValue: ''})
     }
     
    editarAtarefa(id, name){
      const lista = this.state.listaDeTarefas;
      if(name === ""){
        throw alert('O nome da nova tarefa')
      }
      const newValue = {id: id, nome: name, editTarefa: false}
      lista[id] = newValue;
      this.setState({listaDeTarefas: lista, editValue: ''})
    }

    render() {
          return (
                  <Fragment>
                      <WrapperComponent this={this}>
                          <FormTarefa state={this.state} criarTarefa={this.criarTarefa} quandoMudar={this.quandoMudar} />
                          <Tarefas state={this.state} quandoMudar={this.quandoMudar} editar={this.editarAtarefa} habilitar={this.habilitarEdicao} tarefaCompleta={this.tarefaCompletada} remover={this.removeTarefa} />
                          <TarefasCompletas state={this.state} undo={this.backToList} />
                      </WrapperComponent>
                  </Fragment>
                );
            }
      }
        
export default TodoApp;
        