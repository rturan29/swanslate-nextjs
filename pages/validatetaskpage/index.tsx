import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import TaskCard from "../../components/TaskCard";

const randomIndex = Math.floor(Math.random() * 100)

export default function ValidateTaskPage() {
  const [translateTasks, setTranslateTasks] = useState<Data>([]);

  async function getTranslateTasks() {
    const response = await axios.get(
      `https://swanslate-nextjs.vercel.app/api/translateTasks`
    );
    const data: Data = response.data.data;
    return data;
  }

  useEffect(() => {
    getTranslateTasks().then(res => setTranslateTasks(res));
  }, []);

  return (
    <Layout>
      <div>
        {
          translateTasks?.length > 0
            ? translateTasks.slice(randomIndex, randomIndex + 3).map((task, i) => (<TaskCard id={i} key={i} task={task} />))
            : null
        }
      </div>
    </Layout>
  );
}

export type Data = Array<{ sentence: string; }>
