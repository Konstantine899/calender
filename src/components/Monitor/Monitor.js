import React from 'react';
import styled from 'styled-components';
import './Monitor.scss';

const DivWrapper = styled('div')``;

const Monitor = ({ today }) => {
  return (
    <DivWrapper className="DivWrapper">
      <div>
        <span className="DivWrapperMonth">{today.format('MMMM')}</span>
        <span>{today.format('YYYY')}</span>
      </div>
      <div>
        <button className="ButtonWrapper">&lt;</button>
        <button className="ButtonWrapper TodayButton">today</button>
        <button className="ButtonWrapper">&gt;</button>
      </div>
    </DivWrapper>
  );
};

export default Monitor;
