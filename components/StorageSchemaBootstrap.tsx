"use client";

import { useEffect } from "react";
import { STORAGE_SCHEMA_KEY, STORAGE_SCHEMA_VERSION } from "@/lib/storage-version";

const LEGACY_LOCAL_KEYS = ["lifetime_intake_form", "lifetime_search_intake_v1"] as const;

export default function StorageSchemaBootstrap() {
  useEffect(() => {
    try {
      const current = window.localStorage.getItem(STORAGE_SCHEMA_KEY);
      if (current === String(STORAGE_SCHEMA_VERSION)) return;

      for (const key of LEGACY_LOCAL_KEYS) {
        try {
          window.localStorage.removeItem(key);
        } catch {
          // ignore
        }
      }

      window.localStorage.setItem(STORAGE_SCHEMA_KEY, String(STORAGE_SCHEMA_VERSION));
    } catch {
      // ignore storage errors (privacy mode, blocked storage, etc.)
    }
  }, []);

  return null;
}

