import React from 'react'

function SupplierList(props:any) {


    const deleteSupplier = (id: number) => {
        props.removeSupplier(id)
    }

  return (<>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Company Name</th>
                <th>Contact Name</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                props.suppliers?.map((item:any, key:any) => {
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                        <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>

                    </tr>
                })
            }
        </tbody>
    </table>
  </>
  )
}

export default SupplierList