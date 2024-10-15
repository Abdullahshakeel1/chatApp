import React from 'react'

const GenderCheckBox = ({onCheckBoxChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender=== 'male' ?'selected':''}`}>
                <span className='label-text'>male</span>
                <input
                 type="checkbox"
                 checked={selectedGender=== 'male'}
                 onChange={()=>onCheckBoxChange('male')}
                  className='checkbox border-slate-900' name="" id="a" />
            </label>
        </div>
        <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender=== 'female' ?'selected':''}`}>         
                       <span className='label-text'>female</span>
                <input
                   checked={selectedGender=== 'female'}
                   onChange={()=>onCheckBoxChange('female')}
                 type="checkbox"
                  className='checkbox border-slate-900' name="" id="n" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox