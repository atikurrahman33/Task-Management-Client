import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const params = useParams();
  const task = useLoaderData();
  const navigate = useNavigate();

  const updateTaskData = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const date = form.date.value;
    const category = form.category.value;
    const description = form.description.value;

    const updatedTask = {
      title,
      date,
      category,
      description
    };

    fetch(`http://localhost:5000/taskupdate/${task._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            'Good job!',
            'Task updated successfully',
            'success'
          );
          form.reset();
          navigate('/dashboard/mylist');
        }
      })
      .catch(error => {
        console.error('Error updating task:', error);
      });
  };

  return (
    <div>
      <div className="card-body">
        <form onSubmit={updateTaskData}>
          <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
            <div className="form-control">
              <label className="mb-2 font-bold">Title</label>
              <input type="text" name="title" defaultValue={task.title} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="mb-2 font-bold">Date</label>
              <input type="number" name="date" defaultValue={task.date} className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="mb-2 font-bold">Priority</label>
              <input type="text" name="category" defaultValue={task.category} className="input input-bordered" required />
            </div>
          </div>
          <div className="form-control">
            <label className="mb-2 font-bold">Details Description</label>
            <textarea className="textarea textarea-bordered h-52 mt-4" name="description" defaultValue={task.description}></textarea>
          </div>
          <div className="form-control mt-6">
            <input className="btn border-0 bg-blue-500 hover:bg-blue-700" type="submit" value="Update Task" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
