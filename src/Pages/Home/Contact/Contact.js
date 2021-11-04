import React from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
      <div className="row w-100 pb-4 ps-5">
        {/* This is address section There had our all address information to with us  */}
        <div className="col-lg-6 col-12">
          <h2 className="pt-5">
            <b className="text-primary">Address : </b>Agargaw, Mirpur 10 <br />
            Dhaka
          </h2>
          <h2 className="pt-5">
            <b className="text-primary">Phone : </b> +08801739749344
          </h2>
          <h2 className="pt-5">
            <b className="text-primary">Email : </b> ks.hospital@gmail.com
          </h2>
        </div>

        {/* This is Contact form  */}
        <div className="col-12 col-lg-6 mt-3">
          <Form className=" bg-warning w-75 p-3 rounded">
            <Form.Group className="mb-1">
              <Form.Label className="text-start">Email address</Form.Label>
              {/* Email address  */}
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-1">
              <br />
              <Form.Label>Your problem</Form.Label>
              <Form.Control type="text" placeholder="Topics" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
              {/* Text box to write some us */}
              <Form.Label>Problem details</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button className="mt-0" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
  );
};

export default Contact;
