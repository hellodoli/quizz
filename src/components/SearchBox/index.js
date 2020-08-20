import React, { useState } from 'react';
import clsx from 'clsx';
import { Link as RouteLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Link } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { getRootQuizz } from '../../selector/quizz';
import {
  searchBox as searchBoxClass,
  searchBoxResult as searchBoxResultClass,
} from './styled';

function ListSearchResult({ searchData }) {
  const classes = searchBoxResultClass();
  if (searchData.length === 0) return null;
  return (
    <List className={classes.root}>
      {searchData.map((quest) => (
        <Link
          underline="none"
          component={RouteLink}
          to={`/quizzs/${quest.id}`}
          color="textPrimary"
          key={quest.id}
        >
          <ListItem button className={classes.item}>
            <ListItemText primary={quest.title} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
}

function SearchBox() {
  console.log('re-render SearchBox');
  const classes = searchBoxClass();
  const rootQuizz = useSelector(getRootQuizz);
  const [input, setInput] = useState('');

  const searchData =
    input.trim() !== ''
      ? rootQuizz.filter(
          (quizz) => quizz.title.toLowerCase().search(input.toLowerCase()) > -1
        )
      : [];

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={clsx(classes.container, classes.inner)}>
        <SearchIcon />
        <div className={classes.inputWrapp}>
          <input
            type="text"
            className={classes.input}
            value={input}
            onChange={handleChangeInput}
          />
        </div>
      </div>
      <ListSearchResult searchData={searchData} />
    </div>
  );
}

export default SearchBox;
