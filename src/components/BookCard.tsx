import React, {PropsWithChildren} from 'react';
import Grid from './Grid';
import {Link} from 'react-router-dom';

interface BookCardProps {
  className: string
  grid: string;
  to: string;
  title: string;
  subtitle: string;
  authors: {
    first_name: string;
    last_name: string;
  }[];
  img_url: string;
}

export default function BookCard({className, grid, to, title, subtitle, authors, img_url, children}: PropsWithChildren<BookCardProps>): React.ReactElement {
  let byline = "by";
  let fullName = "";
  
  if(authors.length === 1) {
    fullName = `${authors[0].first_name} ${authors[0].last_name}`;
    byline += ` ${fullName}`; 
  } else if(authors.length === 2) {
    authors.forEach((author, index) => {
      fullName = `${author.first_name} ${author.last_name}`;
      byline += (index === 1 ? ` and ${fullName}` : ` ${fullName}`); 
    });
  } else {
    authors.forEach((author, index) => {
      fullName = `${author.first_name} ${author.last_name}`;
      byline += (index === authors.length-1 ? ` ${fullName},` : ` and ${fullName}`);
    });
  };
  
  return(
    <section className={className}>
      <Grid className={grid}>
        <img className="book-card__book-cover" alt="" src={img_url}></img>
        <Link className="book-card__link" to={to}>
          <section className="book-card__details">
            <p className="book-card__title">{title}</p>
            {subtitle !== " " && <p className="book-card__subtitle">{subtitle}</p>}
            <p className="book-card__byline">{byline}</p>
          </section>
        </Link>
        {children}
      </Grid>
    </section>
  );
};