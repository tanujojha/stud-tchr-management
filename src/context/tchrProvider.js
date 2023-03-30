import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {TchrContext} from "./stud-tchrContext";


const TchrProvider = ({children})=>{

  const API_KEY = process.env.REACT_APP_MOCK_API_KEY;
  const url = `https://${API_KEY}.mockapi.io/stud-tchr`;
  const navigate = useNavigate()

    const [tchrs, setTchrs] = useState([]);
    const [singleTchr, setSingleTchr] = useState({});

    // GET ALL TEACHER
    const getAllTchrs = async ()=>{
      try {
        const res = await fetch(`${url}/teacher`);
        const data = await res.json();
        // console.log(data);
        setTchrs(data)
    
      } catch (error) {
        // console.log(error);
        console.error(error)
      }
    }

    // GET A TEACHER USING :ID
    const getSingleTchr = async (id)=>{
      try {
        const res = await fetch(`${url}/teacher/${id}`);
        const data = await res.json();
        setSingleTchr(data);
        
      } catch (error) {
        console.log(error);
      }
    }

    // EDIT/UPDATE A TEACHER
    const editTchrProfile = async (details)=>{
      // console.log(details);
      try {
        const res = await fetch(`${url}/teacher/${details.id}`,{
          method: "PUT",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(details),
        });
        const data = await res.json();
        if(data){
          setSingleTchr(data)
          navigate(`/profile/tchr/${details.id}`);
        }
        
      } catch (error) {
        console.log(error);
      }
    }

    // CREATE A TEACHER
    const createTchr = async (details)=>{
      let randImgNum = Math.floor(Math.random()*1000)
      details.image = `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${randImgNum}.jpg`;
      try {
        const res = await fetch(`${url}/teacher`,{
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(details),
        });
        const data = await res.json();
        // console.log(data);
        data ? navigate("/tchrs") : console.log("something went wrong while creating user");
        
      } catch (error) {
        console.log(error);
      }
    }

    // DELETE A TEACHER
    const deleteTchr = async (id)=>{
      try {
        const res = await fetch(`${url}/teacher/${id}`,{
          method: "DELETE",
        });
        res.status === 200 ? navigate("/tchrs") : console.log("something went wrong while deleting user");
        
      } catch (error) {
        console.log(error);
      }
    }




    return (
        <TchrContext.Provider value = {{tchrs, setTchrs, getAllTchrs, singleTchr, getSingleTchr, editTchrProfile, createTchr, deleteTchr}}>
            {children}
        </TchrContext.Provider>
    )
}


export default TchrProvider

