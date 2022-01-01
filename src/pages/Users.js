import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../redux/actions";
import User from "../components/User";
import LoadingComponent from "../components/common/LoadingComponent";
const Users = () => {
  const [userData, setUserData] = useState([[], []]);
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(loadUsers());
    setUserData({ ...users });
  }, []);

  return (
    <div>
      {loading && <LoadingComponent />}
      {loading ||
        userData?.map((user) => {
          return (
            <div key={user.id}>
              <User user={user} />
            </div>
          );
        })}
      hi
    </div>
  );
};

export default Users;
