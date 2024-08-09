"use client";

import { useState } from "react";

export default function Counter({ user }) {
  const [count, SetCount] = useState(0);

  console.log(user);
  return (
    <div>
      <p>Ther are {user.length} users on This Pages</p>
      <button onClick={() => SetCount((c) => c + 1)}>{count}</button>;
    </div>
  );
}
