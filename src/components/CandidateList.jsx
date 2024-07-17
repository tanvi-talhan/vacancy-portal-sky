import React from 'react';
import "../style/CandidateList.css"
import { Candidates } from '../pages/CandidateList';

 export const CandidateList = () => {
  return (
    <div className="user-table-container">
      <div className="header">
        <h2>Users</h2>
        <p>A list of all the users in your account including their name, title, email and role.</p>
        <button className="add-user-btn">Add user</button>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Email</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Candidates.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.title}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td><a href={`/edit/${index}`}>Edit</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};