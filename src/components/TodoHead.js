import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color : #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`

function TodoHead() {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo=> todo.done ? false : true).length
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year : 'numeric',
        month : 'long',
        day : 'numeric'
    })
    const week = ['일','월','화','수','목','금','토']
    const dayIndex = today.getDay()
  return (
    <TodoHeadBlock>
        <h1>{dateString}</h1>
        <div className="day">{`${week[dayIndex]}요일`}</div>
        <div className="tasks-left">할 일 {undoneTasks}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;