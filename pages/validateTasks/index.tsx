import React, { useContext, useEffect } from "react";
import Layout from "../../components/Layout";
import ValidateTaskCard from "../../components/ValidateTaskCard";
import AppContext from "../../lib/helpers/appContext";

export default function ValidateTaskPage() {
  const { state } = useContext(AppContext)

  useEffect(() => {

  }, []);

  return (
    <Layout>
      <div>
        {
          (state.tasks.validationTasks)?.length
            ? (state.tasks.validationTasks).slice(0, 3).map((task, i) => (<ValidateTaskCard key={i} task={task} />))
            : null
        }
      </div>
    </Layout>
  );
}
