import styled from "styled-components";
import CloseIcon from "@/public/images/icons/ic_x.svg";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.gray[400]};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue.primary};
  }
`;

interface DeleteButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick, label }) => {
  return (
    <Button aria-label={`${label} 삭제`} onClick={onClick}>
      <CloseIcon />
    </Button>
  );
};

export default DeleteButton;
