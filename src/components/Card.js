import React from "react";

const Card = ({ id, category, name, tag, example, description }) => {
  return (
    <article className="center mw7 mw-7-ns br3 hidden ba b--black-10 mv4">
      <h1 className="f3 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
        {name}
      </h1>
      <h2 className="f4 bg-near-white br3 br--top black-60 mv0 pv1 ph3">
        {category}
      </h2>
      <div className="pa1 bt b--black-10">
        <p className="ph3 f6 f5-ns lh-copy measure light-red mt3">
          <code>{example}</code>
        </p>
      </div>
      <div className="pa1 bt b--black-10">
        <p className="ph3 f6 f5-ns lh-copy measure mt3">{description}</p>
      </div>
    </article>
  );
};

export default Card;
