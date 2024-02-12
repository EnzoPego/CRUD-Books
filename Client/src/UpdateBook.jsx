import { useState,useEffect } from "react";
import { useNavigate, useParams }from 'react-router-dom'
import axios from "axios"



export const UpdataeBook = () => {

  const {id} = useParams()
  
  const [values, setValues] = useState({
    publisher:'',
    name:'',
    date:''
  })
  
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`http://localhost:3000/update/${id}`,values) 
      console.log(response)
      if(response.status === 200){
        e.target.reset()
        setValues({ publisher:'', name:'', date:''})
      }
      navigate('/')
    } catch (error) {
      console.log(error)      
    } 
  }


  useEffect(() => {
    updateBook();
  }, []);

  const updateBook = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/getrecord/${id}`)
      //console.log(response);

      setValues({
        ...values, 
        publisher: response.data[0].publisher,
        name: response.data[0].name,
        date: response.data[0].date})
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
    <div className="flex justify-center mt-20 text-gray-700 font-bold text-3xl">
        <h1>Update Book</h1>
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
          value={values.publisher}
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
          value={values.name}
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
          value={values.date}
          onChange={(e)=>setValues({...values, date:e.target.value})}
        />
      </div>

      <button
        type="submit"
        className="bg-transparent hover:bg-green-500 text-gray-600 hover:text-white py-1 px-2 border border-gray-600 hover:border-transparent rounded text-md font-bold mt-4"
      >
        Update
      </button>
    </form>
  </>
    
  )
}

