import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useDeleteBooking } from "./useDeleteBooking";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { deleteBooking, isDeleting: isDeletingBooking } = useDeleteBooking();
  const { booking, isLoading, error } = useBooking();
  const navigate = useNavigate();
  const moveBack = useMoveBack();
  if (isLoading) return <Spinner />;
  const { status, id } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{id}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <Modal>
        <ButtonGroup>
          <Modal.Open opens="delete">
            <Button variation="danger" opens="delete">
              Delete
            </Button>
          </Modal.Open>
          {status === "unconfirmed" && (
            <Button onClick={() => navigate(`/checkin/${id}`)}>Check in</Button>
          )}
          <Button variation="secondary" onClick={moveBack}>
            Back
          </Button>
        </ButtonGroup>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="booking"
            onConfirm={() => deleteBooking(id)}
            disabled={isDeletingBooking}
          />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default BookingDetail;
