// import {useState} from "react";

// export const useFetch = (baseUrl: string)=>{
//   const [isLoading, setIsLoading] = useState(false);

//   const request = async <T>(url: string, option: RequestInit): Promise<T[]> => {
//     setIsLoading(true);

//     const res = await fetch(baseUrl + url,{
//       headers:{"Content-Type" : "application/json"},
//       ...option,
//     });
//     setIsLoading(false);
//     if(!res.ok) return[];
//     return res.json();
//   };

//   const get = <T> (url: string) => request<T>(url,{method:"GET"});
//   const post =(url: string, data: any) => 
//     request (url,{method:"GET", body:JSON.stringify(data)});
//   const put =(url: string, data: any) => 
//     request (url,{method:"PUT", body:JSON.stringify(data)});

//   const del = <T> (url: string) => request<T>(url,{method:"DELETE"});

//   return {isLoading, get, post,put,del};
// };
//----
// import {useState} from "react";

// export const useFetch = (baseUrl: string)=>{
//   const [isLoading, setIsLoading] = useState(false);

//   const request = async <T>(url: string, option: RequestInit): Promise<T> => {
//     setIsLoading(true);
//     let res: Response;
    
//     // 💡 SỬA 1: Dùng try...catch...finally để đảm bảo setIsLoading(false) luôn được gọi
//     try {
//         res = await fetch(baseUrl + url,{
//             headers:{"Content-Type" : "application/json"},
//             ...option,
//         });

//         if(!res.ok) {
//             // Ném lỗi nếu response không OK
//             throw new Error(`HTTP error! status: ${res.status}`);
//         }
        
//         // 💡 Chú ý: Trả về T (single item) thay vì T[]
//         return res.json() as Promise<T>; 
        
//     } catch (error) {
//         console.error("Fetch failed:", error);
//         throw error; // Ném lỗi để component biết và xử lý
//     } finally {
//         setIsLoading(false); // ✅ Đảm bảo loading state được tắt
//     }
//   };

//   const get = <T> (url: string) => request<T>(url,{method:"GET"});
  
//   // 💡 SỬA 2: Đổi method từ GET sang POST
//   const post = <T>(url: string, data: any) => 
//     request<T> (url,{method:"POST", body:JSON.stringify(data)}); 
  
//   const put = <T>(url: string, data: any) => 
//     request<T> (url,{method:"PUT", body:JSON.stringify(data)});

//   const del = <T> (url: string) => request<T>(url,{method:"DELETE"});

//   return {isLoading, get, post,put,del};
// };
import { useState } from "react";

export const useFetch = (baseUrl: string) => {
  const [isLoading, setIsLoading] = useState(false);

  const request = async <T>(
    url: string,
    options: RequestInit
  ): Promise<T[]> => {
    setIsLoading(true);

    const res = await fetch(baseUrl + url, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });

    setIsLoading(false);
    if (!res.ok) return [];
    return res.json();
  };

  const get = <T>(url: string) => request<T>(url, { method: "GET" });
  const post = (url: string, data: any) =>
    request(url, { method: "POST", body: JSON.stringify(data) });
  const put = (url: string, data: any) =>
    request(url, { method: "PUT", body: JSON.stringify(data) });

  const del = <T>(url: string) => request<T>(url, { method: "DELETE" });

  return { isLoading, get, post, put, del };
};