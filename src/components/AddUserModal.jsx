import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { UserInitialData } from "./UserProfileCard";

export default function AddUserModal() {
  const [showModal, setShowModal] = useState(false);
  const [cardState, setCardState] = useState(UserInitialData);
  const onChange = (e) => {
    const fieldID = e.target.id;
    const fieldValue = e.target.value;
    setCardState({ ...cardState, [fieldID]: fieldValue });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newData = {
      profilePicture: UserInitialData.profilePicture,
      firstName: UserInitialData.firstName,
      secondName: UserInitialData.lastName,
      occupation: UserInitialData.occupation,
      phoneNumber: UserInitialData.phoneNumber,
      email: UserInitialData.email,
    };

    setCardState([...cardState, newData]);
    setCardState(UserInitialData);
  };
  console.log(cardState);
  return (
    <>
      <React.Fragment>
        <Button
          className="mx-2"
          outline={true}
          gradientDuoTone="greenToBlue"
          onClick={() => setShowModal(true)}>
          + Add your Info
        </Button>
        {showModal ? (
          <Modal
            show={true}
            size="xl"
            popup={true}
            onClose={() => setShowModal(false)}>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Add you information
                </h3>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="firstName" value="" />
                    </div>
                    <TextInput
                      id="firstName"
                      value={cardState.firstName || ""}
                      onChange={onChange}
                      placeholder="First name"
                      required={true}
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="lastName" value="" />
                    </div>
                    <TextInput
                      id="lastName"
                      value={cardState.lastName || ""}
                      onChange={onChange}
                      placeholder="Last name"
                      required={true}
                    />
                  </div>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="occupation" value="" />
                    </div>
                    <TextInput
                      id="occupation"
                      value={cardState.occupation || ""}
                      onChange={onChange}
                      placeholder="Occupation"
                      required={true}
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="" />
                    </div>
                    <TextInput
                      id="email"
                      value={cardState.email || ""}
                      onChange={onChange}
                      placeholder="name@company.com"
                      required={true}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="phoneNumber" value="Your phone" />
                  </div>
                  <TextInput
                    id="phoneNumber"
                    value={cardState.phoneNumber || ""}
                    onChange={onChange}
                    type="phone"
                    required={true}
                  />
                </div>

                <div className="w-full ">
                  <Button
                    onSubmit={onSubmit}
                    outline={true}
                    gradientDuoTone="greenToBlue">
                    Submit
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        ) : null}
      </React.Fragment>
    </>
  );
}
