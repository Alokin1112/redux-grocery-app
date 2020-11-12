import React,{useState} from 'react';
import styled from 'styled-components';
import GROUP from '../duck/group';
import {useDispatch} from 'react-redux';
import  actions from '../duck/actions';

const SortSelect=styled.select`
    width: 20%;
    font-size:1.25em;
    border:none;
    border-radius:5px;
    padding:0.25em;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.3),
    0 0 0 1px rgba(10, 10, 10, 0.08);
`
function Sort(){
    const dispatch=useDispatch();   
    const[sort,setSort]=useState("sort")

    const handleChange=(e)=>{
        console.log(e.target.value);
        setSort(e.target.value)
        if(e.target.value!='sort')
            dispatch(actions.sort(e.target.value))
        else
            dispatch(actions.resert_sort())
    }
    return(
        <>
            <SortSelect onChange={handleChange} value={sort}>
                <option value="sort">Sort</option>
                {Object.keys(GROUP).map(key=>
                <option key={key} value={GROUP[key]}>{GROUP[key]}</option>
                )}
            </SortSelect>
        </>
    )
}

export default Sort;