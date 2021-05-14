import React from "react";
import Link from "next/link";
import Head from "next/head";
import Home from "../styles/Home.module.css";

function index(props) {
  console.log("props", props);

  return (
    <div className={Home.container}>
      <Head>
        <title>All Users</title>
      </Head>
      {props.users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <a className={Home.listItem}>{user.name}</a>
        </Link>
      ))}
    </div>
  );
}

index.getInitialProps = async (ctx) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  return { users };
};

export default index;