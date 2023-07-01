import React from 'react'
import '../css/companyInfoStyle.css';
import { FcRight } from "react-icons/fc";
const CompanyInfo = ({title, company, dates, duties}) => {
  return (
    <div className='infoDiv'>
        <div><h3>{title}</h3></div>
        <div><span>{company}</span></div>
        <div><span>{dates}</span></div>
        <div >
          {duties?.map((item) => {
            return (
              <h4><FcRight/>{item}</h4>
              )
          })}
        </div>
    </div>
  )
}

export default CompanyInfo