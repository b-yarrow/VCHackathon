import React from 'react'
import MyModal from './Modal'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

export default function ModalTest() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <ButtonToolbar>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
      </Button>

            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </ButtonToolbar >
    );
}

// render(<ModalTest />)


