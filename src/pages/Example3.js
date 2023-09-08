import React, { useState } from 'react'
import Example3_ from './../components/Example3'
import { styled } from 'styled-components'

const Content = styled.div`
    display: flex; 
    justify-content: start;
    border: 1px solid #ddd;   
`
 
const ContentList = styled.div`
    border: 1px solid #ddd;
    padding: 20px;
`
const Answer = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: start;
    column-gap : 20px;
    row-gap: 20px;
    color: lightpink;
`


function Example3() {
    const [data, setData] = useState(Example3_);
    // 데이터 입렵해주기(json파일)
    const [animal, setAnimal] = useState("전체");
    const [gender, setGender] = useState("전체");

    const dataFilter = data.filter(e =>{
        let isAnimal = animal === "전체" || e.animal === animal;
        let isGender = gender === "전체" || e.gender === gender;
        return isAnimal && isGender
        // 두개 다 참일때만 값이 출력됨
        // if(animal === "전체"){
        //     return e.animal
        // }else{
        //     return e.animal === animal
        // }
        // return(
        //     animal === "전체" ? e.animal : e.animal === animal
        // );
    })
    const FilterAnimal = [...new Set(data.map(e => e.animal))];
    const FilterAnimal2 = [...new Set(data.map(e => e.gender))];

  return ( 
    <>
            <div>
                <ul>
                    <li>전체</li>
                    {
                    FilterAnimal.map((e,i)=>{
                        return(
                        <li key={i} onClick={()=>{setAnimal(e)}}>{e}</li>
                        )
                    })
                    }
                </ul>
                <ul>
                    <li>전체</li>
                            {
                            FilterAnimal2.map((e,i)=>{
                                return(
                                <li key={i} onClick={()=>{setGender(e)}}>{e}</li>
                                )
                            })
                            }
                </ul>
            </div>
            <ul>
                    {
                        dataFilter.map((e,i)=>{
                            return(
                                <li key={i}>{e.animal} - {e.gender} - {e.height}</li>
                            )
                        })
                    }

            </ul>
    </>
  )
}

export default Example3