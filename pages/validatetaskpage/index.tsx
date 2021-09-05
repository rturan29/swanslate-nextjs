import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import TaskCard from "../../components/TaskCard";

export default function ValidateTaskPage() {
  const [translateTasks, setTranslateTasks] = useState<Data>([]);

  async function getTranslateTasks() {
    const response = await axios.get(
      `https://swanslate-nextjs.vercel.app/api/translateTasks`
    );
    const data: Data = response.data;
    return data;
  }

  useEffect(() => {
    getTranslateTasks().then(res => setTranslateTasks(res));
  }, []);

  return (
    <Layout>
      <div>
        {translateTasks?.length
          ? Object.values(translateTasks)?.map((task, i) => (
            <TaskCard key={i} task={task} />
            ))
          : null}
      </div>
    </Layout>
  );
}

export type Data = Array<{ sentence: string; }>
