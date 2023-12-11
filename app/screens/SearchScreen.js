import React, { useState } from "react";

import AppView from "../components/AppView";
import SearchBar from "../components/SearchBar";
import PeopleList from "../components/PeopleList";
import { people, reaction } from "../database/People";
import CheckBoxFilter from "../components/CheckBoxFilter";

function SearchScreen(props) {
  const [peopleList, setPeopleList] = useState(people);
  const [check, setCheck] = useState(false);

  return (
    <AppView>
      <SearchBar people={people} setPeopleList={setPeopleList} check={check} />
      <CheckBoxFilter check={check} setCheck={setCheck} />
      <PeopleList people={peopleList} reaction={reaction.LIGHT_BULB} />
      <PeopleList people={peopleList} reaction={reaction.COLD_FACE} />
    </AppView>
  );
}

export default SearchScreen;
