import { ArrowDown } from "lucide-react";
import React from "react";
import Button from "@/components/ui/button/Button";
import NeonCursor from "@/components/NeonCursor";

const NeonCursorDisplay = () => {
  return (
    <div>
      <div id='app'>
        <h2>NEON TEST</h2>
        <NeonCursor />
      </div>
    </div>
  );
};

export default NeonCursorDisplay;
