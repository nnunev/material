//import React, { useState, useEffect } from 'react';
// import {empList, empStatus, columns} from './Table'

import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import NameCustomComponent from './components/NameCustomComponent';
import ActionsComponent from './components/ActionsComponent';
import UserComponent from './components/UserComponent'

const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', status: 0, role: 'Admin' },
  { id: 2, name: "Rajadja", email: 'raj@gmail.com', status: 1, role: 'User' },
  { id: 3, name: "David", email: 'david342@gmail.com', status: 1, role: 'User' },
  { id: 4, name: "Vikas", email: 'vikas75@gmail.com', status: 0, role: 'Admin' },
]
function App() {

  //const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(resp => resp.json())
  //     .then(resp => {
  //       setData(resp)
  //     })
  // }, [])

  const [data, setData] = useState(empList)

  const columns = [
    // { title: "ID", field: 'id' },
    {title: "", field: "avatar", render: (row) => <NameCustomComponent name={row.name} />},
    {title: "User", field: "user", render: (row) => <UserComponent row={row} />},
    {title: "Role", field: "role"}, 
    {
      title: "Status", field: 'status', render: (row) => <div className={row.status ? "active" : "deactive"}>
        {row.status ? "Active" : "Deactive"}
      </div>
    },
     { title: "Actions", field: "actions", render: (row) => <ActionsComponent id={row.id} />}
  ]


  return (
    <div className="App">
     
      <MaterialTable
        container
        title="Project Data"
        data={data}
        columns={columns}
        
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          // onRowDelete: selectedRow => new Promise((resolve, reject) => {
          //   const index = selectedRow.tableData.id;
          //   const updatedRows = [...data]
          //   //updatedRows.splice(index, 1)
          //   setTimeout(() => {
          //     setData(updatedRows)
          //     resolve()
          //   }, 2000)
          // }),
          // onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
          //   const index=oldRow.tableData.id;
          //   const updatedRows=[...data]
          //   updatedRows[index]=updatedRow
          //   setTimeout(() => {
          //     setData(updatedRows)
          //     resolve()
          //   }, 2000)
          // })

        }}
         
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "first",
          //columnsButton: true,
          //filtering: true,
          hideFilterIcons: false,
          showFirstLastPageButtons: true,
          pageSize: 5,
          padding: 'dense',
          pageSizeOptions: [5, 20, 50]
        }}

      />
    </div>
  );
}
export default App;