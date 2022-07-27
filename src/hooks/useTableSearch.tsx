import React from 'react'

export default function useTableSearch() {
  return (
    <div>useTableSearch</div>
  )
}


// import { useState, useEffect } from "react";

// export const useTableSearch = ({ searchVal, retrieve }: any) => {
//     const [filteredData, setFilteredData] = useState<any>([]);
//     const [origData, setOrigData] = useState<any>([]);
//     const [searchIndex, setSearchIndex] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setLoading(false);
//         const crawl = (user: any, allValues: any) => {
//             if (!allValues) allValues = [];
//             for (const key in user) {
//                 if (typeof user[key] === "object") crawl(user[key], allValues);
//                 else allValues.push(user[key] + " ");
//             }
//             return allValues;
//         };
//         const fetchData = async () => {
//             const { data: users } = await retrieve();
//             setOrigData(users);
//             setFilteredData(users);
//             const searchInd = users.map((user: any, index: any) => {
//                 const allValues = crawl(user, index);
//                 return { allValues: allValues.toString() };
//             });
//             setSearchIndex(searchInd);
//             if (users) setLoading(false);
//         };
//         fetchData();
//     }, [retrieve]);

//     useEffect(() => {
//         if (searchVal) {
//             const reqData = searchIndex.map((user: any, index: any) => {
//                 if (user.allValues.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0)
//                     return origData[index];
//                 return null;
//             });
//             setFilteredData(
//                 reqData.filter(user => {
//                     if (user) return true;
//                     return false;
//                 })
//             );
//         } else setFilteredData(origData);
//     }, [searchVal, origData, searchIndex]);

//     return { filteredData, loading };
// };




// // import { useState, useEffect } from "react";

// // export const useTableSearch = ({ searchVal, retrieve }: any) => {
// //     const [filteredData, setFilteredData] = useState<any>();
// //     const [origData, setOrigData] = useState<any>();
// //     const [searchIndex, setSearchIndex] = useState<any>();
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         setLoading(false);
// //         const crawl = (user: any, allValues: any) => {
// //             if (!allValues) allValues = [];
// //             for (const key in user) {
// //                 if (typeof user[key] === "object") crawl(user[key], allValues);
// //                 else allValues.push(user[key] + " ");
// //             }
// //             return allValues;
// //         };

// //         const fetchData = async () => {
// //             const { data: users } = await retrieve();
// //             setOrigData(users);
// //             setFilteredData(users);
// //             const searchInd = users.map((user: any, allValues1: any) => {
// //                 const allValues = crawl(user, allValues1);
// //                 return { allValues: allValues.toString() };
// //             });
// //             setSearchIndex(searchInd);
// //             if (users) setLoading(false);
// //         };
// //         fetchData();
// //     }, [retrieve]);

// //     useEffect(() => {
// //         if (searchVal) {
// //             const reqData = searchIndex ? searchIndex.map((user: any, index: any) => {
// //                 if (user.allValues.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0)
// //                     return origData[index];
// //                 return null;
// //             }) : null;
// //             setFilteredData(
// //                 reqData && reqData.filter((user: any) => {
// //                     if (user) return true;
// //                     return false;
// //                 })
// //             );
// //         } else setFilteredData(origData);
// //     }, [searchVal, origData, searchIndex]);

// //     return { filteredData, loading };
// // };