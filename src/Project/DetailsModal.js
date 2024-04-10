import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  className="btn btn-light text-dark" variant="primary" onClick={handleShow}>
      More details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{props.name}---------{props.code}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description}</Modal.Body>

        <Modal.Footer>
          <Button className="btn btn-light text-dark" variant="secondary" onClick={handleClose}>
            Close
          </Button>
  
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;