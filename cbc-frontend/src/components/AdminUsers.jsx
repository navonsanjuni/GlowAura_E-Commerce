import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (!token) return;
    axios.get("http://localhost:3000/api/users/", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setUsers(res.data))
      .catch(() => setUsers([]));
  }, [token]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead>
            <tr className="bg-pink-100">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Type</th>
              <th className="py-2 px-4">Blocked</th>
              <th className="py-2 px-4">Profile</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="border-t">
                <td className="py-2 px-4">{user.firstname} {user.lastname}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.type}</td>
                <td className="py-2 px-4">{user.isBlocked ? "Yes" : "No"}</td>
                <td className="py-2 px-4"><img src={user.profilePicture} alt="profile" className="w-8 h-8 rounded-full" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AdminUsers;