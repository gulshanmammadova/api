import React from 'react'

const Search = (props) => {
    const [name,id,phone]=props.filteredUser;
  return (
    <div className='container my-4'>
 
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
   {
  
props.filteredUser.map(user=>{
    
   return (
    <tr key={user.id}>
    <th scope="row">{user.id}</th>
    <td>{user.name}</td>
    <td>{user.phone}</td>
    </tr>
   );
}
)
   }
  </tbody>
</table>

    </div>
  )
}

export default Search