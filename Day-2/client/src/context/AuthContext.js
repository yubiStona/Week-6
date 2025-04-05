import React,{ createContext,useState,useEffect, Children } from "react";


export const  AuthContext=createContext();

export const AuthProvider =({Children})=>{
    const [userRole,setUserRole]=useState('');
    const [isAunthenticated,setIsAuthenticated]=useState(false);

    useEffect(()=>{
        //checking if user already logged in
        const checkLoggedIn=async ()=>{
            try{
                    const token=localStorage.getItem('token');
                    if(token){
                        setIsAuthenticated(true);
                        const userRole =JSON.parse(localStorage.getItem('role'));
                    }
            }catch{

            }
        }
    })
}