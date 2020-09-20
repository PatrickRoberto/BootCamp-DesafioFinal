import React, { useState, useEffect } from 'react';
import Title from './components/title/Title';
import SelectSection from './components/select/SelectSection';
import NewRegisterButton from './components/NewRegister/NewRegisterButton';
import Filter from './components/Filter/Filter';
import Registers from './components/Registers/Registers';
import Resume from './components/Resume/Resume';
import Information from './components/Resume/Information';
import NextReturnButton from './components/select/NextReturnButton';
import SelectYearMonth from './components/select/SelectYearMonth';

import service from './Service/Service'



export default function App() {


  const [registerTransactions, setRegisterTransactions] = useState([]);
  const [filteredRegisterTransactions, setFilteredRegisterTransactions] = useState([]);
  const [yearMonthSelected, setYearMonthSelected] = useState('2020-09');
  const [filter, setFilter] = useState('');



  useEffect(() => {

    const BuscaApi = async () => {
      const retorno = await service.CaptureTransactions();
      console.log('agora na api',retorno)
      const registerTransactionModify = [...registerTransactions, ...retorno.data];
      setRegisterTransactions(registerTransactionModify);

      const filterStartRegisters = registerTransactionModify.filter((transaction) => {
        return transaction.yearMonth === yearMonthSelected;
      })
      setFilteredRegisterTransactions(filterStartRegisters);
    }

    const execut = async () => {
      await BuscaApi();

    }

    execut();

  }, []);


  useEffect(() => {
    const filterStartRegisters = registerTransactions.filter((transaction) => {

      return transaction.yearMonth === yearMonthSelected &&
        (filter ? `${transaction.description} ${transaction.category}`.toLowerCase().includes(filter.toLowerCase()) : true)
    });
    setFilteredRegisterTransactions(filterStartRegisters);
  }, [yearMonthSelected, filter])


  const createYearMonthList = () => {
    let list = [];
    registerTransactions.forEach(({ yearMonth }) => {
      if (!list.includes(yearMonth)) {
        list.push(yearMonth);
      }
    });
    list.sort((a, b) => a.yearMonth > b.yearMonth);

    list = list.map((item, index) => {
      return { index, item }
    });

    return list;
  }

  const CreateNewRegister = () => {
    console.log('Novo Registro chamado!')
  }

  const filterValues = (value) => {
    setFilter(value);
  }
  const changeYearMonthSelect = (value) => {
    setYearMonthSelected(value);
  }

  const Receitas = () => {
    return filteredRegisterTransactions.reduce((acc, cur) => {
      return acc += cur.type === '+' ? cur.value : 0
    }, 0);
  }
  const Despesas = () => {
    return filteredRegisterTransactions.reduce((acc, cur) => {
      return acc += cur.type === '-' ? cur.value : 0
    }, 0);
  }
  const Saldo = () => {

    const SaldoReceita = filteredRegisterTransactions.reduce((acc, cur) => {
      return acc += cur.type === '+' ? cur.value : 0
    }, 0);

    const SaldoDespesa = filteredRegisterTransactions.reduce((acc, cur) => {
      return acc += cur.type === '-' ? cur.value : 0
    }, 0);

    return SaldoReceita - SaldoDespesa;
  }

  if (!registerTransactions.length)
    return (<div>Aguarde!</div>);
  else
    return (
      <div className="container">
        <Title />
        <hr />
        <SelectSection>
          <NextReturnButton typeMark="Return" />
          <SelectYearMonth
            yearMonthList={createYearMonthList()}
            changeSelectFilter={changeYearMonthSelect}
            startValue={yearMonthSelected}
          />
          <NextReturnButton typeMark="Next" />
        </SelectSection>

        <hr />
        <Resume>
          <Information title="Lançamentos" value={filteredRegisterTransactions.length} style={{ color: 'black' }} />
          <Information title="Receitas" value={
            `R$ ${Receitas()}`
          } style={{ color: 'green' }} />
          <Information title="Despesas" value={
            `R$ ${Despesas()}`
          } style={{ color: 'red' }} />
          <Information title="Saldo" value={
            `R$ ${Saldo()}`
          } style={{ color: 'gray' }} />
        </Resume>
        <hr />
        <NewRegisterButton titleButton={"+ Novo Registro"} onClickButtonAction={CreateNewRegister} />

        <Filter filterValue="Digite aqui" filterAction={filterValues} />

        <hr />
        <Registers registersTransactions={filteredRegisterTransactions} />
      </div>


    );
}
