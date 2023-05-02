import Image from "next/image";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import {AiOutlineUser} from 'react-icons/ai'

function Table() {
  const [rightSide, setRightSide] = useState(false);
  const [search,setSearch]= useState("")
  const [users,setUsers] =useState([{
    avatar:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Liam James",
    email: "liamjames@example.com",
    phone_number: "+1 (555) 000-000",
    position: "Software engineer",
    salary: "$100K",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Olivia Emma",
    email: "oliviaemma@example.com",
    phone_number: "+1 (555) 000-000",
    position: "Product designer",
    salary: "$90K",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "William Benjamin",
    email: "william.benjamin@example.com",
    phone_number: "+1 (555) 000-000",
    position: "Front-end developer",
    salary: "$80K",
  },])
  

  function AddFunction() {
    setRightSide(true);
  }


  function AddUserFunc(e){
    e.preventDefault();

    const name=e.target[0].value
    const email=e.target[1].value
    const  phone_number=e.target[2].value
    const position=e.target[3].value
    const salary=e.target[4].value
  
   const userObj={name,email,phone_number,position,salary}
    const newUserArray= [...users,userObj]
    setUsers(newUserArray)
    setRightSide(false)
  }

  function DeleteUserFunc(index){

    const deleteUser=users.filter((item,idx)=>idx!==index)
    setUsers(deleteUser)
  }
  return (
    <div className="relative w-full">
      <div className="my-3 md:mt-0 float-right flex items-center">
        <div className="relative ">
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            value={search}
            placeholder="Searching"
            onChange={(e)=>setSearch(e.target.value)}
            className=" pl-12 pr-3 py-1 mx-1 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <button
          onClick={AddFunction}
          className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
        >
          Add product
        </button>
      </div>
      <table className="w-full table-auto text-sm text-left border ">
        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
          <tr>
            <th className="py-3 px-6">Username</th>
            <th className="py-3 px-6">Phone number</th>
            <th className="py-3 px-6">Position</th>
            <th className="py-3 px-6">Salary</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {users.filter((item)=>{
            return search.toLocaleLowerCase()==='' ? item : item.name.toLocaleLowerCase().includes(search)
          }).map((item, idx) => (
          
       <tr key={idx} > 
      
              <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                 {item.avatar ?<Image  src={item.avatar} className="w-10 h-10 rounded-full" />: 
                 <span className="w-10 h-10 bg-gray-100 text-[24px] flex items-center justify-center rounded-full"><AiOutlineUser/></span>}
                <div>
                  <span className="block text-gray-700 text-sm font-medium">
                    {item.name}
                  </span>
                  <span className="block text-gray-700 text-xs">
                    {item.email}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.phone_number}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
              <td className="text-right px-6 whitespace-nowrap">
                <a
                  href=""
                  className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                >
                  Edit
                </a>
                <button onClick={()=>DeleteUserFunc(idx)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                  Delete
                </button>
              </td>
             
            </tr>
       
          ))}
        </tbody>
      
      </table>

      {rightSide ? (
        <Slide
          direction="right"
          style={{
            background: "rgba( 255, 255, 255, 0.2 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 6.5px )",
            borderRadius: "10px",
          }}
          duration={1000}
          className="h-screen absolute  right-0 top-0 w-80 "
        >
          {" "}
          <div className="p-3"> 
          <form
                    onSubmit={AddUserFunc}
                    className="mt-8 space-y-5"
                    id="adduser"
                >
                   <div>
                        <label className="font-medium">
                            Username
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Phone number
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Position
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Salary
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                      form="adduser"
                      className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                       Add
                    </button>
                   
                </form>

            <button className="bg-red-400 p-2 text-white w-full mt-2 rounded-lg" onClick={()=>setRightSide(false)}>cancel</button>
          </div>
        </Slide>
      ) : (
        ""
      )}
    </div>
  );
}

export default Table;
