"use client"

import React, { useState } from "react";

function useToggle() {
  const [status, setStatus] = useState(false);

 const toggleStatus = ()=>(setStatus(prev=>!prev))
 

  return { status, toggleStatus };
}

export default useToggle;
