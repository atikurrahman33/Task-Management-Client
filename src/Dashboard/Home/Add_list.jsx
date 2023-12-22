

import Swal from 'sweetalert2';

import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

function Add_list() {
    
    const { user } = useContext(AuthContext);

    const handleUser = e => {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        const form = e.target;
       
        const title = form.title.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const category = form.category.value;
        const date = (form.date.value);
        const description = form.description.value;

        const userObj = { // Use a different variable name
            title,            
            userName,
            email: userEmail,
            category,
            date,
            description
        };

        console.log(userObj);

        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj), // Send the userObj instead of user
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            if (json.insertedId) {
                Swal.fire(
                    'Thank you!',
                    'This is now available',
                    'success'
                )
                form.reset()
            }
        });
    }

  return (
    <div>
     <h1 className="font-bold text-blue-900 md:text-4xl text-center">ADD YOUR NEW List</h1>
            <div className=" flex-shrink-0 mx-auto bg-[#F3F3F3] md:p-10 my-10">
            
                <div className="card-body ">
                    <form onSubmit={handleUser}>
                    <div className="form-control pb-2">
                                <input type="text" name="title" placeholder="Title" className="input input-bordered" />
                            </div>
                        <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
                           
                           
                            <div className="form-control">
                                <input type="text" name="userName" defaultValue={user?.displayName} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name="userEmail" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            
                            <div className="form-control">
                                <select
                                    id="category"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none input-bordered"
                                    name="category"

                                >                                    
                                    <option value="" >Select a Priority</option>
                                    <option value="High">High</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Low">Low</option>
                                    
                                </select>
                            </div>
                            <div className="form-control">
                                <input type="date" name="date" placeholder="Deadline" className="input input-bordered" required />
                            </div>
                           
                        </div>
                        <div className="form-control">
                            <textarea className="textarea textarea-bordered h-52 mt-4" name="description" placeholder="Detail description"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn border-0 bg-[#FF3811] hover:bg-orange-500">Order Confirm</button> */}
                            <input className="btn border-0 bg-blue-500 hover:bg-blue-700" type="submit" value="ADD List" />
                        </div>
                    </form>
                </div>
            </div>
      
     
    </div>
  )
}

export default Add_list;