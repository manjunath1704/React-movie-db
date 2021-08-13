import React from 'react';
// hrlpers

import {calcTime,convertMoney}  from '../../helpers'

import { Wrapper, Content } from '../MovieInfoBar/MovieInfoBar.styles';


const MovieInfoBar = ({time, budget,revenue}) => (
    <Wrapper>
        <Content>
            <div className="column">
                    <p>Running time:: {calcTime(time)}</p>
            </div>
            <div className="column">
                 <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                 <p>Revenue: {convertMoney(revenue)}</p>
            </div>

        </Content>
    </Wrapper>
)
export default MovieInfoBar;