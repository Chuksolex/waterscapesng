// components/BootstrapInitializer.js
'use client';

import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const BootstrapInitializer = () => {
  useEffect(() => {
    // No additional JavaScript needed; just importing bootstrap.bundle.min.js initializes it
  }, []);

  return null;
};

export default BootstrapInitializer;
