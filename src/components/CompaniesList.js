import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import './companylist.css'
const CompaniesList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://demo2211087.mockable.io/mock',{
         method: 'POST',
         body: JSON.stringify({
            
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
        })
           .then((res) => res.json())
           .then((data) => {
              console.log(data);
              setPosts(data.companies);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
    return (
        <div>
            
           <div className='table__container'>
           <h2 className='text-center pt-5 pb-3'>Companies List</h2>
           <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
       {
        posts.map((a, index) => <tr key={a.name}>
        <td>{index + 1}</td>
        <td>{a.name}</td>
        <td>{a.email}</td>
        <td>{a.status}</td>
    </tr>)
        
       }
      </tbody>
    </Table>
           </div>
        </div>
    );
};

export default CompaniesList;