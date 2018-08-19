import styled from "styled-components";

export const Head = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  box-sizing: border-box;
  color: #8c8c8c;
  line-height: 40px;
  border-bottom: 1px solid #d6dadc;
  margin: 0 12px;
  overflow: hidden;
  padding: 0 32px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 1;
  font-size: 14px;
  text-align: center;
  font-weight: 400;
`;

export const Close = styled.button`
  position: absolute;
  right: 10px;
  border: none;
  background: transparent;
  color: #8c8c8c;
  height: 100%;
  cursor: pointer;
  z-index: 10;
  width: 30px;
  padding: 0;

  &:hover {
    .close {
      color: #4d4d4d;
    }
  }

  &:focus {
    outline: none;
  }
`;

export const Container = styled.div`
  z-index: 100;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);
  position: absolute;
  min-width: 280px;
  padding: 10px;
  min-height: 280px;
  background-color: white;
  right: 0;
  top: 40px;
  border-radius: 4px;
  font-size: 14px;
`;

export const Actions = styled.ul`
  list-style: none;
  padding: 2px;
  margin: 0;
`;

export const ActionTitle = styled.span`
  color: #444;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  margin: 5px 0 5px 0;
  color: #8c8c8c;
`;

export const Action = styled.li`
  cursor: pointer;
  padding: 5px 8px 5px 10px;
  margin-top: 4px;

  &:hover {
    background-color: #298fca;
    ${ActionTitle} {
      color: white;
    }
    ${Text} {
      color: white;
    }
  }
`;
