import React, { useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { FormRow } from "../../components";

const Message = () => {
  const { id } = useParams();

  const [values, setValues] = useState({ message: "" });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <div className="chat_header">User 1</div>
        <div className="chat_messages">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          consectetur culpa possimus temporibus voluptates dolores recusandae
          fugiat voluptatum saepe eos magni ratione reiciendis ea deleniti rem
          cum, nobis blanditiis tempore, autem totam ipsum non! Enim eius,
          nostrum tempore eos fuga iusto in ipsum aliquid recusandae tempora
          exercitationem quis illo, id earum! Accusamus voluptatem veritatis,
          voluptate ex provident, et officiis expedita iure, iste maiores
          quaerat? Doloremque assumenda voluptatum ad asperiores natus corrupti,
          voluptate voluptas corporis magni unde nostrum, maxime laboriosam
          recusandae suscipit esse? Natus excepturi temporibus earum. Facere,
          exercitationem molestias veritatis rem quam ipsam deserunt pariatur
          adipisci facilis magnam unde aspernatur alias odit sequi sint autem
          neque provident assumenda accusantium harum voluptatem soluta
          repellendus nihil. Omnis mollitia commodi amet maxime quia, nesciunt
          molestias distinctio suscipit eaque quos tenetur cum molestiae saepe.
          Tenetur, amet, voluptate exercitationem aliquam ab autem quidem
          assumenda minima blanditiis eaque itaque natus! Ipsam earum neque
          voluptate quasi libero quas illum ullam quo quam reprehenderit culpa
          unde maiores sapiente facilis et inventore dolorum voluptatibus,
          corporis perspiciatis rerum voluptatum, atque veritatis perferendis.
          Maxime repellat cupiditate necessitatibus, ducimus voluptatum culpa
          minima aut modi ab ipsum adipisci repudiandae autem sapiente aperiam
          nobis quaerat reprehenderit dolore accusantium neque mollitia
          recusandae! Aut repellat quae perferendis eos eveniet rerum, autem
          atque labore ea placeat quod et expedita animi mollitia sapiente magni
          laboriosam adipisci architecto iure provident ipsam eum. Illum,
          asperiores delectus libero, quam molestiae cupiditate dolorum laborum
          recusandae, ad fugit voluptatem amet mollitia veniam eos. Excepturi,
          voluptatum? Ipsa laborum eligendi tempore, optio in voluptatibus
          omnis, error dignissimos ratione ut perferendis, reiciendis
          reprehenderit? Doloribus qui sapiente atque blanditiis doloremque
          nesciunt vero ipsa rem quos a at, modi enim consequuntur provident
          reiciendis odio numquam, voluptas possimus quae, voluptatem aspernatur
          quaerat. Temporibus similique unde fugiat? Minima, dolore soluta. Non
          quisquam, deleniti, nam nostrum quas labore, dolore rem sint eum modi
          illum iure. Ad, laboriosam mollitia quo temporibus voluptatibus libero
          qui quisquam, assumenda dolor tenetur nam aperiam minima dolore
          repudiandae sit fugit. Impedit sint a omnis commodi minus laboriosam
          animi vitae, nam ducimus maiores odio repellendus quis sunt assumenda
          tempore maxime eligendi culpa quo magni sapiente. Delectus et repellat
          debitis vero. Pariatur molestiae consectetur, laboriosam quibusdam
          necessitatibus, maiores id minima quasi sunt praesentium nam
          laudantium velit vero quod doloremque eius possimus. Voluptas
          explicabo nostrum dolores? Cumque quod laudantium nisi, obcaecati
          praesentium facere illo odio excepturi aliquid asperiores quasi
          voluptate in inventore distinctio ut, dolores, eligendi quia nesciunt
          temporibus vitae.
        </div>

        <div className="chat_input">
          <FormRow
            type="text"
            placeholder="message"
            name="message"
            value={values.message}
            handleChange={handleChange}
          />

          <button className="chat_input--button">Send</button>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Message;

const Wrapper = styled.div`
  margin: 10px;
  height: 82vh;
  width: 100%;
`;

const ContentWrapper = styled.div`
  background: #f2f2f2;
  position: relative;
  height: 100%;
  width: 80%;
  margin: 0 auto;
  border-radius: 10px;

  .chat_header {
    height: 40px;
    font-family: "Poppins", sans-serif;
    margin: 5px;
    background: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid rgba(67, 43, 255, 0.8);
  }

  .chat_messages {
    overflow-y: scroll;
    height: 75vh;
  }

  .chat_input {
    position: absolute;
    width: 100%;
    margin: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #f2f2f2;
    border-top: 2px solid rgba(67, 43, 255, 0.8);
  }

  input {
    width: 80%;
    height: 60px;
    padding-left: 5px;
    border: none;
    background: #dfe5fd;
    border-radius: 15px;
    margin: 10px 0;
    outline: none;
    transition: all 0.3s ease-in-out;
    font-family: "Poppins", sans-serif;
  }
  input:focus {
    color: black;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
  }
  input::placeholder {
    font-family: "Poppins", sans-serif;
    color: #9e9e9e;
  }

  .chat_input--button {
    background: rgba(67, 43, 255, 0.8);
    border-radius: 15px;
    border: none;
    margin: 10px 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 36px;
    padding: 10px 10px;
    cursor: pointer;
    color: white;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: translate(0, -5px);
      background: #432bff;
      box-shadow: 0px 6px 30px rgba(67, 43, 255, 0.4);
    }
  }
`;
