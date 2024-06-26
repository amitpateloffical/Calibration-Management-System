import React, { useState } from "react";
import Header from "../../Header/Header";
import { Box, Drawer } from "@mui/material";

const Department = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(newOpen);
  };

  const DrawerList = () => (
    <Box sx={{ width: "90vw", maxWidth: "500px" }}>
      <div role="presentation">
        <div className="flex justify-between p-2 border border-gray-500">
          <div className="font-medium">Department Master</div>
          <div
            className="cursor-pointer hover:text-red-700"
            onClick={toggleDrawer(false)}
          >
            X
          </div>
        </div>
        <div className="p-2">
          <div className="flex flex-col pt-4 gap-3">
            <label className="font-medium">Department Name</label>
            <input
              type="text"
              placeholder=""
              className="border border-gray-500 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-3 py-4">
            <label className="font-medium">Department Head</label>
            <select className="border border-gray-500 rounded p-2">
              <option>Admin</option>
              <option>Test user1</option>
            </select>
          </div>
          <button className="bg-green-600 text-white w-full mt-3 py-2">
            Submit
          </button>
        </div>
      </div>
    </Box>
  );

  const tabledata = [
    {
      sNo: "1",
      departmentName: "Developer",
      createdBy: "Admin",
      createdDate: "17-10-2022",
      status: "Active",
    },
    {
      sNo: "2",
      departmentName: "RC update",
      createdBy: "Admin",
      createdDate: "27-12-2022",
      status: "Active",
    },
    {
      sNo: "3",
      departmentName: "Sales",
      createdBy: "Admin",
      createdDate: "11-01-2023",
      status: "Active",
    },
    {
      sNo: "4",
      departmentName: "Marketing",
      createdBy: "Manager",
      createdDate: "28-03-2024",
      status: "Active",
    },
  ];

  return (
    <div className="bg-gray-100 h-full">
      <Header />
      <div className="flex justify-between p-4">
        <div className="text-lg font-medium">Department Master</div>
        <div>
          <button
            className="p-2 bg-blue-600 text-white"
            onClick={toggleDrawer(true)}>
            Add New Department
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">S.No.</th>
              <th className="px-4 py-2">DEPARTMENT NAME</th>
              <th className="px-4 py-2">CREATED BY</th>
              <th className="px-4 py-2">CREATED DATE</th>
              <th className="px-4 py-2">STATUS</th>
              <th className="px-4 py-2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {tabledata.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{item.sNo}</td>
                <td className="px-4 py-2">{item.departmentName}</td>
                <td className="px-4 py-2">{item.createdBy}</td>
                <td className="px-4 py-2">{item.createdDate}</td>
                <td className="px-4 py-2">{item.status}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-4">
                    <button
                      className="p-1 bg-yellow-500 text-white"
                      onClick={toggleDrawer(true)}
                    >
                      Edit
                    </button>
                    <button
                      className="p-1 bg-red-500 text-white"
                      onClick={() => alert("Are You Want To Delete")}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        className=""
      >
        <DrawerList />
      </Drawer>
    </div>
  );
};

export default Department;
