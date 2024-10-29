import { useEffect, useState } from "react";
import styled from "styled-components";
import { DataType } from "../Interfaces";

const StyledAdvice = styled.div`
  width: 54rem;
  min-height: 36.4rem;

  @media (max-width: 768px) {
    width: 34.3rem;
    min-height: 34.7rem;
    padding: 2rem;
  }
`;

const AdviceTextContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #313a48;
  min-height: 33.2rem;
  width: 100%;
  border-radius: 15px;

  svg {
    width: 100%;
    height: 1.6rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    min-height: 31.5rem;
  }
`;

const Text = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 4rem;
`;

const AdviseHeader = styled.h1`
  color: #53ffaa;
  font-weight: 800;
  font-size: 1.3rem;
  line-height: 1.776rem;
  text-align: center;
  letter-spacing: 0.409rem;
  margin-bottom: 2rem;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.503rem;
    letter-spacing: 0.346rem;
    margin-bottom: 1.5rem;
  }
`;

const Quote = styled.p`
  color: #cee3e9;
  font-weight: 800;
  font-size: 2.8rem;
  line-height: 3.825rem;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2.4rem;
    line-height: 3.278rem;
    margin-bottom: 2rem;
  }
`;

const AdviseButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;

  background-color: transparent;
  border-radius: 50px;
  margin-bottom: ;
  border: none;
  top: 90%;

  cursor: pointer;
  z-index: 999;

  svg {
    min-width: 6.4rem;
    min-height: 6.4rem;
  }
`;

function Advise() {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchData() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result.slip);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // fetchData();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <StyledAdvice>
      <AdviceTextContainer>
        <Text>
          <AdviseHeader>
            {loading ? `ADVICE#` : `ADVICE #${data?.id}`}
          </AdviseHeader>
          <Quote>{loading ? `loading` : `${data?.advice}`}</Quote>

          <svg
            viewBox="0 0 444 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="8" width="196" height="1" fill="#4F5D74" />
            <rect x="248" y="8" width="196" height="1" fill="#4F5D74" />
            <rect x="212" width="6" height="16" rx="3" fill="#CEE3E9" />
            <rect x="226" width="6" height="16" rx="3" fill="#CEE3E9" />
          </svg>
        </Text>

        <AdviseButton onClick={fetchData}>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32Z"
              fill="#53FFAA"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 20H40C42.2081 20.0025 43.9975 21.7919 44 24V40C43.9975 42.2081 42.2081 43.9975 40 44H24C21.7919 43.9975 20.0025 42.2081 20 40V24C20.0025 21.7919 21.7919 20.0025 24 20ZM26 36.5C26 37.3284 26.6716 38 27.5 38C28.3284 38 29 37.3284 29 36.5C29 35.6716 28.3284 35 27.5 35C26.6716 35 26 35.6716 26 36.5ZM27.5 29C26.6716 29 26 28.3284 26 27.5C26 26.6716 26.6716 26 27.5 26C28.3284 26 29 26.6716 29 27.5C29 28.3284 28.3284 29 27.5 29ZM30.5 32C30.5 32.8284 31.1716 33.5 32 33.5C32.8284 33.5 33.5 32.8284 33.5 32C33.5 31.1716 32.8284 30.5 32 30.5C31.1716 30.5 30.5 31.1716 30.5 32ZM36.5 38C35.6716 38 35 37.3284 35 36.5C35 35.6716 35.6716 35 36.5 35C37.3284 35 38 35.6716 38 36.5C38 37.3284 37.3284 38 36.5 38ZM35 27.5C35 28.3284 35.6716 29 36.5 29C37.3284 29 38 28.3284 38 27.5C38 26.6716 37.3284 26 36.5 26C35.6716 26 35 26.6716 35 27.5Z"
              fill="#202733"
            />
          </svg>
        </AdviseButton>
      </AdviceTextContainer>
    </StyledAdvice>
  );
}

export default Advise;
