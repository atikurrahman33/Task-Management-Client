import { useContext, useEffect, useState } from "react";



import { AuthContext } from "../../../Provider/AuthProvider";
import My_listTable from "./My_listTable";


const My_list = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    
    const [mytask, setMytask] = useState([]);
    const url = `http://localhost:5000/task/?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMytask(data);
            })
    }, [url])
    console.log(mytask);

   

    return (
        <div>
            
            <section className="antialiased bg-gray-100 text-gray-600 py-10 mb-10 px-4">
                <div className="flex flex-col justify-center">

                    <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="font-semibold text-gray-800 w-1/2">My List</h2>
                           
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>

                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Title</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Description</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Priority</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Date</div>
                                            </th>
                                            
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Action</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {
                                            mytask.map(task => <My_listTable key={task._id} task={task} mytask={mytask} setMytask={setMytask}></My_listTable>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default My_list;