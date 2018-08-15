import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import { Link } from "react-router-dom";
import { Container, Head, Title, Close } from "../../../UI/TitlePopup";
import OptionBtn from "../OptionBtn";
import { upgrade } from "../../../utils";

const InfoBtn = styled(OptionBtn)``;

const InfoWrapper = styled(Container)`
  min-width: 360px;
`;

const HintContainer = styled.div`
  margin: 12px;
`;

const Preview = styled.img``;

const Sub = styled.h3`
  margin: 0;
  padding: 8px;
  min-height: 40px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

const LinkTrello = styled.a`
  text-decoration: none;
  color: #444;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    background-color: #edeff0;
    color: black;
  }
`;

const HintBtn = styled.button`
  cursor: pointer;
  border-radius: 3px;
  color: #8c8c8c;
  display: block;
  padding: 6px 8px;
  width: 100%;
  text-align: center;
  border: none;
  background-color: transparent;

  &:hover {
    background-color: #edeff0;
    color: #111;
  }
`;

const Supports = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 15px 40px;
  list-style: none;
  border-top: 1px solid #d6dadc;
`;

const Support = styled.li``;

const SupportLink = styled(Link)`
  text-decoration: none;
  border-radius: 3px;
  color: #8c8c8c;
  display: block;
  margin: 0 1px 1px;
  padding: 6px 8px;
  transition: 0.1s ease;

  &:hover {
    background-color: #edeff0;
    color: #111;
    outline: 0;
  }
`;

class Info extends Component {
  constructor() {
    super();
    this.state = {
      info: false
    };
  }

  handleClickOutside = () => {
    this.setState({ info: false });
  };

  toggleInfo = () => {
    this.setState(prevState => ({ info: !prevState.info }));
  };

  render() {
    const { info } = this.state;
    return (
      <div>
        <InfoBtn onClick={this.toggleInfo}>
          <i className="fas fa-info" />
        </InfoBtn>
        {info ? (
          <InfoWrapper>
            <Head>
              <Title> Информация </Title>
              <Close onClick={this.toggleInfo}>
                <i className="fas fa-times close" />
              </Close>
            </Head>
            <HintContainer>
              <LinkTrello href={upgrade}>
                <Preview
                  src="https://a.trellocdn.com/prgb/dist/images/tips/webinars-1@1x.7e1a1e13b5deffa70d0e.png"
                  srcset="https://a.trellocdn.com/prgb/dist/images/tips/webinars-1@1x.7e1a1e13b5deffa70d0e.png 1x,
                  https://a.trellocdn.com/prgb/dist/images/tips/webinars-1@2x.f1f39fe1384c4439d932.png 2x"
                />
                <Sub>
                  {" "}
                  Посетите вебинар, чтобы повысить уровень продуктивности{" "}
                </Sub>
              </LinkTrello>
              <HintBtn> Новая подсказка </HintBtn>
            </HintContainer>
            <Supports>
              <Support>
                {" "}
                <SupportLink to="/tour"> Тур </SupportLink>{" "}
              </Support>
              <Support>
                {" "}
                <SupportLink to="/pricing"> Цены </SupportLink>{" "}
              </Support>
              <Support>
                {" "}
                <SupportLink to="/app"> Приложения </SupportLink>{" "}
              </Support>
              <Support>
                {" "}
                <SupportLink to="/blog"> Блог </SupportLink>{" "}
              </Support>
              <Support>
                {" "}
                <SupportLink to="/privacy">
                  {" "}
                  Конфиденциальность{" "}
                </SupportLink>{" "}
              </Support>
              <Support>
                {" "}
                <SupportLink to="/info"> Подробнее </SupportLink>{" "}
              </Support>
            </Supports>
          </InfoWrapper>
        ) : null}
      </div>
    );
  }
}

export default onClickOutside(Info);
