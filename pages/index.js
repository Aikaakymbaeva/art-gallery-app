import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import ArtPieces from "@/components/ArtPieces";

export default function index() {
  const { data, error } = useSWR("https://example-apis.vercel.app/api/art");
  const pieces = data;
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <ArtPieces pieces={pieces}></ArtPieces>
    </div>
  );
}
