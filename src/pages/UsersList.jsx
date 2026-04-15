import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers, deleteUser } from "../api/users";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const data = await getAllUsers();
      setUsers(data.data || []);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    const result = await deleteUser(id);
    if (result.success) {
      setUsers(users.filter((u) => u.id !== id));
    } else {
      alert("Failed to delete user.");
    }
  }

  if (loading) return <p>Loading users...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users List</h1>

      <button
        onClick={() => navigate("/add-user")}
        style={{
          marginBottom: "15px",
          padding: "10px 15px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        + Add New User
      </button>

      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th>Name</th>
            <th>Email</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.firstname} {user.lastname}
                </td>
                <td>{user.email}</td>

                <td>
                  <button
                    onClick={() => navigate(`/edit-user/${user.id}`)}
                    style={{
                      marginRight: "10px",
                      padding: "5px 10px",
                      background: "green",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(user.id)}
                    style={{
                      padding: "5px 10px",
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;