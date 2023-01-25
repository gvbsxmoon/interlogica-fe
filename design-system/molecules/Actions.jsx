import React from "react";
import Button from "atoms/Button";
import Typography from "atoms/Typo";
import styled from "styled-components";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import { detail, secondary } from "colors";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding: 4.8rem 0;
`;
const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

const Actions = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Action>
        <Button variant="rounded" onClick={() => navigate('/backdoor/post')}>
          <AiOutlinePlus color={detail} />
        </Button>
        <Typography variant="body">Inserisci un nuovo dolce</Typography>
      </Action>

      <Action>
        <Button variant="rounded" onClick={() => navigate('/backdoor/update')}>
          <RxUpdate color={detail} />
        </Button>
        <Typography variant="body">Aggiorna un dolce già presente</Typography>
      </Action>

      <Action>
        <Button variant="rounded" onClick={() => navigate('/backdoor/delete')}>
          <AiOutlineDelete color={secondary} />
        </Button>
        <Typography variant="body">Elimina un dolce dalla vetrina</Typography>
      </Action>
    </Container>
  );
};

export default Actions;
