import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudContext } from "./stud-tchrContext";


const StudProvider = ({children})=>{
  
  const API_KEY = process.env.REACT_APP_MOCK_API_KEY;
  const url = `https://${API_KEY}.mockapi.io/stud-tchr`;
  // const url = "https://641e92edf228f1a83ea633e4.mockapi.io/stud-tchr"

  const navigate = useNavigate()

    const [studs, setStuds] = useState([]);
    const [singleStud, setSingleStud] = useState({});

    // GET ALL STUDENTS
    const getAllStuds = async ()=>{
      try {
        const res = await fetch(`${url}/student`);
        const data = await res.json();
        // console.log(data);
        setStuds(data)
    
      } catch (error) {
        // console.log(error);
        console.error(error)
      }
    }

    // GET A STUDENT USING :ID
    const getSingleStud = async (id)=>{
      try {
        const res = await fetch(`${url}/student/${id}`);
        const data = await res.json();
        setSingleStud(data);
        // res.status === 200 
        // ? navigate(`/profile/stud/${id}`) 
        // : console.log("something went wrong while fetching single user");
        
      } catch (error) {
        console.log(error);
      }
    }

    // EDIT/UPDATE A STUDENT
    const editStudProfile = async (details)=>{
      // console.log(details);
      try {
        const res = await fetch(`${url}/student/${details.id}`,{
          method: "PUT",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(details),
        });
        const data = await res.json();
        if(data){
          setSingleStud(data)
          navigate(`/profile/stud/${details.id}`)
        }
        
      } catch (error) {
        console.log(error);
      }
    }

    // CREATE A STUDENT
    const createStud = async (details)=>{
      let randImgNum = Math.floor(Math.random()*1000)
      details.image = `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${randImgNum}.jpg`;
      try {
        const res = await fetch(`${url}/student`,{
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(details),
        });
        const data = await res.json();
        // console.log(data);
        data ? navigate("/studs") : console.log("something went wrong while creating user");
        
      } catch (error) {
        console.log(error);
      }
    }

    // DELETE A STUDENT
    const deleteStud = async (id)=>{
      try {
        const res = await fetch(`${url}/student/${id}`,{
          method: "DELETE",
        });
        // const data = await res.json();
        // console.log(data);
        res.status === 200 ? navigate("/studs") : console.log("something went wrong while deleting user");
        
      } catch (error) {
        console.log(error);
      }
    }



    return (
        <StudContext.Provider value={{getAllStuds, studs, getSingleStud, singleStud, editStudProfile, createStud, deleteStud}}>
            {children}
        </StudContext.Provider>
    )
}


export default StudProvider;

