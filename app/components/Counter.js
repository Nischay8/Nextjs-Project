"use client";

import { useState } from "react";

export default function Counter() {
  const [count, SetCount] = useState(0);
  const [newCount, SetNewCount] = useState(0);
  return <button onClick={() => SetCount((c) => c + 1)}>{count}</button>;
}
