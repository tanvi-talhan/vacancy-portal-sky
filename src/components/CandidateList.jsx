import React from 'react';
import "../style/CandidateList.css"
import { Candidates } from '../pages/CandidateList';
import { Table } from "flowbite-react";


 export const CandidateList = () => {
  return (
    <>
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Candidate name</Table.HeadCell>
          <Table.HeadCell>Designation</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        {Candidates.map((candidate, index) => (
          <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {candidate.name}
            </Table.Cell>
            <Table.Cell>{candidate.title}</Table.Cell>
            <Table.Cell>{candidate.email}</Table.Cell>
            <Table.Cell>{candidate.role}</Table.Cell>
            <Table.Cell>
              <a href='#' className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          ))}
          
        </Table.Body>
      </Table>
    </div>
    </>
  );
};