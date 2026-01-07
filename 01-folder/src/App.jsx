import React from 'react'
import Card from './components/Card'

function App() {

 const jobOpenings = [
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/5968/5968269.png",
    companyName: "Amazon",
    posted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/300/300221.png",
    companyName: "Google",
    posted: "1 week ago",
    post: "Frontend React Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$150/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
    companyName: "Meta",
    posted: "3 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$180/hr",
    location: "California, USA",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
    companyName: "Apple",
    posted: "2 weeks ago",
    post: "Graphic Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
    companyName: "Netflix",
    posted: "10 days ago",
    post: "Motion Designer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$200/hr",
    location: "Los Angeles, USA",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
    companyName: "Google",
    posted: "4 days ago",
    post: "UX Researcher",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/5968/5968269.png",
    companyName: "Amazon",
    posted: "1 month ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$170/hr",
    location: "Seattle, USA",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/2424/2424439.png",
    companyName: "JP Morgan",
    posted: "8 days ago",
    post: "Mobile App Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$140/hr",
    location: "London, UK",
  },
  
  
];

  return (
 <div className="parent">
{jobOpenings.map(function (elem,idx){

return <div key={idx}> <Card photo={elem.brandLogo} post={elem.posted} company={elem.companyName} post={elem.post} tags={elem.tag1} tag2={elem.tag2} payment={elem.pay} area={elem.location}/>
</div>
})}
 </div>
  )
}

export default App