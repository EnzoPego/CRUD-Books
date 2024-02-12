
import { useState } from "react";
import { useNavigate }from 'react-router-dom'
import axios from "axios"


export const CreateBook = () => {

  const navigate = useNavigate() 

  const [values, setValues] = useState({
    publisher:'',
    name:'',
    date:''
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/create',values) 
      console.log(response)
      if(response.status === 200){
        e.target.reset()
        setValues({ publisher:'', name:'', date:''})
        alert('Libro publicado correctamente')
      }
      navigate('/')
    } catch (error) {
      console.log(error)      
    } 
  }
  

  return ( 
    <>
      <div className="flex justify-center mt-20 text-gray-700 font-bold text-3xl">
          <h1>Add a Book</h1>
      </div>
      <form onSubmit={handleSubmit} 
        className="max-w-sm mx-auto mt-16">
        <div className="mb-5">
          <label className="block mb-2 text-md font-medium text-gray-700">
            Publisher :
          </label>
          <input
            name="publisher"
            type="text"
            id="publisher"
            className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e)=>setValues({...values, publisher: e.target.value})}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-md font-medium text-gray-700">
            Book Name :
          </label>
          <input
            name="name"
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e)=>setValues({...values, name:e.target.value})}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-md font-medium text-gray-700">
            Publish Date :
          </label>
          <input
            name="date"
            type="date"
            id="date"
            className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e)=>setValues({...values, date:e.target.value})}
          />
        </div>

        <button
          type="submit"
          className="bg-transparent hover:bg-green-500 text-gray-600 hover:text-white py-1 px-2 border border-gray-600 hover:border-transparent rounded text-md font-bold mt-4"
        >
          Submit
        </button>
      </form>
    </>
  );
};
