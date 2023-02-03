import React from "react";
import { BaseLayout } from "./components";

import { Routing } from "./routes/config";

export default function App() {
  return (
    <BaseLayout>
      <Routing />
    </BaseLayout>
  );
}
