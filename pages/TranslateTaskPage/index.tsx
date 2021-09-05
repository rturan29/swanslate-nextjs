import React, { useContext, useEffect } from "react";
import Layout from "../../components/Layout";
import TranslateTaskCard from "../../components/TranslateTaskCard";
import AppContext from "../../lib/helpers/appContext";




export default function TranslateTaskPage() {
  const { state } = useContext(AppContext)

  useEffect(() => {

  }, []);

  return (
    <Layout>
      <div>
        {
          (state.tasks.translateTasks)?.length
            ? (state.tasks.translateTasks).map((task, i) => (<TranslateTaskCard key={i} task={task} />))
            : null
        }
      </div>
    </Layout>
  );
}
