import { RxPencil1, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const My_listTable = ({ task, mytask, setMytask }) => {
    console.log(task);
    const deleteCar= (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/task/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your list has been deleted.',
                                'success'
                            )
                            const remaining = mytask.filter(c => c._id !== id);
                            setMytask(remaining);
                        }
                    })
            }
        })
    }
    return (
        <>
             <tr>
                <td className="p-2 whitespace-nowrap">
                    <div className="md:flex items-center">
                       
                        <div className="text-left font-bold">{task?.title}</div>

                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{task?.description}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-700">{task?.category}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-sm text-center">${task?.date}</div>
                </td>
              
               
                <td className="md:pl-12 py-4 whitespace-nowrap flex gap-4">

                    <RxCross1 onClick={() => deleteCar(task?._id)} className="p-3 text-5xl rounded" style={{ color: '#774320', background: 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)' }}></RxCross1>
                    {/* The button to open modal */}
                    <Link to={`update/${task?._id}`} htmlFor="my-modal"><RxPencil1 className="p-3 text-5xl rounded" style={{ color: '#774320', background: 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)' }}></RxPencil1></Link>

                    
                </td>
            </tr>
            
        </>
    );
};

export default My_listTable;





    