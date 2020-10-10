import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import * as S from './styles';

import api from '../../services/api';

//Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [filterActive, setFilterActive] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();

  async function loadTasks(){
    await api.get(`/task/filter/${filterActive}/11:11:11:11:11:11`)
      .then(response => {
        setTasks(response.data);
      });
  }

  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
      setLateCount(response.data.length);
    });
  }

  function Notification(){
    setFilterActive('late');
  }

  useEffect(() => {
    loadTasks();
    lateVerify();
  }, [filterActive]);

  return (
    <S.Container>   
      <Header lateCount={lateCount} clickNotification={Notification}/>
      <S.FilterArea>
        <button type="button" onClick={() => setFilterActive('all')}>
          <FilterCard title="Todos"  active={filterActive === 'all'}/>
        </button>
        <button type="button"  onClick={() => setFilterActive('today')}>
          <FilterCard title="Hoje"   active={filterActive === 'today'}/>
        </button>
        <button type="button" onClick={() => setFilterActive('week')}>
          <FilterCard title="Semana" active={filterActive === 'week'}/>
        </button>
        <button type="button" onClick={() => setFilterActive('month')}>
          <FilterCard title="Mês"    active={filterActive === 'month'}/>
        </button>
        <button type="button" onClick={() => setFilterActive('year')}>
          <FilterCard title="Ano"    active={filterActive === 'year'}/>
        </button>
      </S.FilterArea>

      <S.Title>
        <h3>{filterActive == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
      </S.Title>

      <S.Content>
        {
          tasks.map(t => (
            <Link to={`/task/${t._id}`}>
              <TaskCard type={t.type} title={t.title} when={t.when} />
            </Link>    
         ))
        }
      </S.Content>

      <Footer/>
    </S.Container>
  )
}

export default Home;
