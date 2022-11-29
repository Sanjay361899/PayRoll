import axios from "axios"
export const allEmployeesData=()=>{
    
        axios.get("http://3.108.151.73/api/employees",{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data",
            }
        }
        ).then((res)=>console.log(res))
    
}