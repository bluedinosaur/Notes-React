import React from "react";

const Card = ({ id, category, name, tag, example, description }) => {
  return (
    <article class="center mw7 mw-7-ns br3 hidden ba b--black-10 mv4">
      <h1 class="f3 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{name}</h1>
      <h2 class="f4 bg-near-white br3 br--top black-60 mv0 pv1 ph3">
        {category}
      </h2>
      <div class="bt b--black-10">
        <p class="ph3 f6 f5-ns lh-copy measure light-red">
          <code>{tag}</code>
        </p>
      </div>
      <div class="pa1 bt b--black-10">
        <p class="ph3 f6 f5-ns lh-copy measure light-red">
          <code>{example}</code>
        </p>
      </div>
      <div class="pa1 bt b--black-10">
        <p class="ph3 f6 f5-ns lh-copy measure">
          <td>{description}</td>
        </p>
      </div>
    </article>
  );
};

export default Card;
