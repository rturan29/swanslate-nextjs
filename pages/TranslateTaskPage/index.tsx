import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import TaskCard from "../../components/TranslateTaskCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { taskReducer } from "../../redux/reducers/taskReducer";

const randomIndex = Math.floor(Math.random() * 100);

export default function TranslateTaskCard() {
  // const translateTasks = useSelector<RootState>(state => state.tasks.translateTasks);

  useEffect(() => {

  }, []);

  return (
    <Layout>
      <div>
        {/* {
          (translateTasks as taskReducer["translateTasks"])?.length > 0
            ? (translateTasks as taskReducer["translateTasks"]).slice(randomIndex, randomIndex + 3).map((task, i) => (<TaskCard id={i} key={i} task={task} />))
            : null
        } */}
      </div>
    </Layout>
  );
}
