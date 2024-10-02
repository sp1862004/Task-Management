import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const DailyTaskView = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  async function show() {
    try {
      const res = await axios.get('http://localhost:4000/api/user/taskview');
      setUser(res.data.user);
      setLoading(false);  // Stop loading spinner after data is fetched
    } catch (error) {
      toast.error("Error fetching tasks.");
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  }

  async function trash(id) {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`http://localhost:4000/api/user/${id}`);
        show();
        toast.success("Task deleted successfully.");
      } catch (error) {
        toast.error("Error deleting task.");
        console.error('Error deleting task:', error);
      }
    }
  }

  useEffect(() => {
    show();
  }, []);

  return (
    <>
      <Link className="btn btn-warning mt-5 hadeform" to="/form">Add More Task</Link>
      <div className="container">
        {
          loading ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            user.length > 0 ? (
              <table className='table table-striped table-hover table-bordered text-center mt-5 hadeform'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Task Date</th>
                    <th>Task Description</th>
                    <th>Task Hour</th>
                    <th>Task Status</th> {/* Corrected header name */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((items, index) => (
                    <tr key={items._id}> {/* Added unique key */}
                      <td>{index + 1}</td>
                      <td>{format(new Date(items.Task_date), 'yyyy-MM-dd')}</td>
                      <td>{items.Task_desc}</td>
                      <td>{items.Task_hour}</td>
                      <td>{items.Task_status}</td>
                      <td>
                        <button className="btn btn-danger" onClick={() => trash(items._id)}><i class="fa-solid fa-trash"></i></button>
                        <Link to={`/update/${items._id}`} className='btn btn-success ms-2'><i class="fa-solid fa-pen"></i></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center bg-primary text-white py-3">
                No tasks found.
              </div>
            )
          )
        }
      </div>
      <Toaster />
    </>
  );
};

export default DailyTaskView;
