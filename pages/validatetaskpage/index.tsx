import React, { useContext, useEffect } from "react";
import Layout from "../../components/Layout";
import TranslateTaskCard from "../../components/TranslateTaskCard";
import AppContext from "../../lib/helpers/appContext";




export default function ValidateTaskPage() {
  const { state } = useContext(AppContext)

  useEffect(() => {

  }, []);

  return (
    <Layout>
      <div>
        {/* {
          (state.tasks.validationTasks)?.length
            ? (state.tasks.validationTasks).map((task, i) => (<TranslateTaskCard key={i} task={task} />))
            : null
        } */}
      </div>
    </Layout>
  );
}
