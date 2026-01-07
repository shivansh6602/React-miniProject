import React from 'react'
import {Save} from 'lucide-react'

function card(props) {
  return (
    <div className='parent'>
      <div className="card">

        <div className="top">
<img src={props.photo} alt="" />
       <button>Save <Save /></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.post}</span>
          <h2>{props.post}</h2></h3>
          <h4>{props.tags}</h4>
        <h4>{props.tag2}</h4>
        </div>

        <div className="bottom">
          <div>
            <h3>{props.payment}</h3>
            <p>{props.area}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default card