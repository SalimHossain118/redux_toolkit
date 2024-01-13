/** @format */

import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersReducer } from "../store/slices/UserSlice";
const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    dispatch(deleteUsersReducer());
  };
  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={deleteUsers}>
        clear users
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #d10000;
    margin-top: 2rem;
  }
`;

export default DeleteAllUser;
