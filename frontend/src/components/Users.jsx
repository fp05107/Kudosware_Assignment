import React, { useEffect, useState } from "react";
import { getData } from "./api";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData().then((res) => setUsers(res));
  }, []);

  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="yellow">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Country</Th>
              <Th>Gender</Th>
              <Th>Resume Link</Th>
              <Th>Email</Th>
              <Th>Password</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, index) => {
              return (
                // <div key={index}>
                //   <p>{user.firstname}</p>
                // </div>
                <Tr key={index}>
                  <Td>{user.firstname}</Td>
                  <Td>{user.lastname}</Td>
                  <Td>{user.country}</Td>
                  <Td >{user.gender}</Td>
                  <Td >{user.resume}</Td>
                  <Td >{user.email}</Td>
                  <Td >{user.password}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
