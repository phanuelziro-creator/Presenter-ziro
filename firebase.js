import { initializeApp }

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

import { firebaseConfig }

from "./config.js";

const app = initializeApp(firebaseConfig);

export default app;