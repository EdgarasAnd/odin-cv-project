import { Card, Dropdown, Avatar } from "flowbite-react";

export default function UserProfileCard() {
  return (
    <>
      <div className="m-1">
        <Card>
          <div className="flex items-center justify-between">
            <Avatar
              size="xl"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
              bordered={true}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Visual Designer
            </span>
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
