import React from "react";

import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

import AdviceList from "../components/AdviceList";
import { fetchAdvice } from "../util/database";
import { deleteAdvice } from "../util/database";

const AllAdvice = () => {
  const [loadedAdvice, setLoadedAdvice] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadAdvice() {
      const advice = await fetchAdvice();
      setLoadedAdvice(advice);
    }

    if (isFocused) {
      loadAdvice();
    }
  }, [isFocused, loadedAdvice]);

  const deleteAdviceHandler = async (id) => {
    await deleteAdvice(id);
  };

  return <AdviceList advice={loadedAdvice} onDelete={deleteAdviceHandler} />;
};

export default AllAdvice;
