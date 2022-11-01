import { Card, Dropdown, Avatar } from "flowbite-react";
import AddUserModal from "./AddUserModal";

export const UserInitialData = [
  {
    profilePicture: '',
    firstName: '',
    secondName: '',
    occupation: '',
    phoneNumber: '',
    email: '',
  },
];

export default function UserProfileCard() {
  

  return (
    <>
      <div className="m-1">
        <Card>
          <div className="flex items-center justify-between">
            <Avatar size="xl" img={AddUserModal.profilePicture} rounded={true} bordered={true} />
            <h5 className="text-center mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {AddUserModal.firstName} <br></br> {AddUserModal.secondName}
            </h5>
            <div className="flex flex-col text-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
              {AddUserModal.occupation}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
              {AddUserModal.phoneNumber}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
              {AddUserModal.email}
              </span>
            </div>
            <div className="flex justify-end px-4 pt-4">
              <Dropdown inline={false} label="Edit">
                <Dropdown.Item>
                  <p
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Edit
                  </p>
                </Dropdown.Item>
                <Dropdown.Item>
                  <p
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Delete
                  </p>
                </Dropdown.Item>
                <Dropdown.Item>
                  <p
                    href="#"
                    className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Refresh
                  </p>
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
