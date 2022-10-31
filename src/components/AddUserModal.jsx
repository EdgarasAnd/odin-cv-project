import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";

export default function AddUserModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <React.Fragment>
        <Button
          outline={true}
          gradientDuoTone="greenToBlue"
          onClick={() => setShowModal(true)}>
          + Add your Info
        </Button>
        {showModal ? (
          <Modal
            show={true}
            size="md"
            popup={true}
            onClose={() => setShowModal(false)}>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Add you information
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Your name" />
                  </div>
                  <TextInput
                    id="firstName"
                    placeholder="First name"
                    required={true}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="name@company.com"
                    required={true}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="Your phone" />
                  </div>
                  <TextInput id="phone" type="phone" required={true} />
                </div>

                <div className="w-full">
                  <Button outline={true} gradientDuoTone="greenToBlue">
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
