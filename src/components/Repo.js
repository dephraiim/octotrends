import React from 'react';

const Repo = ({
  index,
  owner,
  name,
  link,
  description,
  lang,
  langColor,
  fork,
  star,
  built,
}) => {
  return (
    <div className="repo">
      <h2>
        <span
          style={{
            fontWeight: 500,
            fontSize: 20,
          }}>
          {`${index}.  `}
        </span>
        <a
          href={link}
          style={{
            color: 'white',
            textDecoration: 'none',
          }}>
          {owner}
          <span
            style={{
              fontWeight: 500,
            }}>
            {` / ${name}`}
          </span>
        </a>
      </h2>
      <p className="description">{description}</p>
      <div className="data">
        <div className="lang">
          <span
            className="langColor"
            style={{
              background: langColor,
            }}></span>
          <p>{lang}</p>
        </div>
        <div className="lang">
          <div className="fork">
            <i className="fa fa-code-fork"></i>
            <span className="num">{fork}</span>
          </div>
          <div className="star">
            <i className="fa fa-star"></i>
            <span className="num">{star}</span>
          </div>
        </div>
      </div>
      <div className="authorImages">
        {built.map(({href, avatar}) => {
          return (
            <a href={href}>
              <img src={avatar} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Repo;
